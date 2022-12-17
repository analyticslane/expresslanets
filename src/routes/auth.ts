import { Router, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

import Logins from '../entities/logins';
import verifytoken from '../middlewares/verifytoken';
import datasource from '../datasource';
import { responseAndLogger } from '../logger';

const router = Router();

const secret = String(process.env.TOKEN_SECRET);
const expiresIn = process.env.EXPIRES ? String(process.env.EXPIRES) : '15m';

router.post('/login', (req: Request, res: Response) => {
  const username = String(req.body.username);
  const password = String(req.body.password);

  datasource
    .getRepository(Logins)
    .findOneByOrFail({ username })
    .then((user) => {
      if (user.validatePassword(password)) {
        sign({ id: user.id, username: user.username }, secret, { expiresIn }, (err, token) => {
          if (err) {
            responseAndLogger(res, 'It was not possible to generate the token', 400);
          }

          return res.send({ token });
        });
      } else {
        responseAndLogger(res, 'Invalid password', 400);
      }
    })
    .catch(() => responseAndLogger(res, 'Invalid user', 400));
});

router.get('/info', [verifytoken], (_req: Request, res: Response) => {
  res.send(res.locals.payload);
});

router.post('/register', (req: Request, res: Response) => {
  const username = String(req.body.username);
  const password = String(req.body.password);

  datasource
    .getRepository(Logins)
    .findOneByOrFail({ username })
    .then(() => {
      responseAndLogger(res, 'User already exists', 406);
    })
    .catch(() => {
      const user = new Logins();
      user.username = username;
      user.password = password;

      datasource
        .getRepository(Logins)
        .save(user)
        .then((user) => res.send(user))
        .catch((error) => responseAndLogger(res, error.message, 500));
    });
});

export default router;
