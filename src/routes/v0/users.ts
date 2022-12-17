import { Router, Request, Response } from 'express';

import User from '../../entities/user';
import verifytoken from '../../middlewares/verifytoken';
import datasource from '../../datasource';
import { responseAndLogger } from '../../logger';

const router = Router();

router.post('/', [verifytoken], (req: Request, res: Response) => {
  if ((req.query.firstName && req.query.lastName) || (req.body.firstName && req.body.lastName)) {
    const user = new User();

    if (req.query.firstName && req.query.lastName) {
      user.firstName = String(req.query.firstName);
      user.lastName = String(req.query.lastName);
    } else {
      user.firstName = String(req.body.firstName);
      user.lastName = String(req.body.lastName);
    }

    datasource
      .getRepository(User)
      .save(user)
      .then((user) => res.send(user))
      .catch((error) => responseAndLogger(res, error.message, 500));
  } else {
    responseAndLogger(
      res,
      `It is necessary to indicate the parameters 'firstName' and 'lastName' for the creation of a user`,
      400
    );
  }
});

router.get('/', [verifytoken], (req: Request, res: Response) => {
  const skip = Number(req.query.from) || 0;
  const take = Number(req.query.take) || 10;

  datasource
    .getRepository(User)
    .find({ skip, take })
    .then((users) => res.send(users))
    .catch((error) => responseAndLogger(res, error.message, 500));
});

router.put('/', [verifytoken], (req: Request, res: Response) => {
  if (req.query.id) {
    datasource
      .getRepository(User)
      .findOneByOrFail({ id: Number(req.query.id) })
      .then((user) => {
        if (req.body.firstName) {
          user.firstName = String(req.body.firstName);
        }
        if (req.body.lastName) {
          user.lastName = String(req.body.lastName);
        }

        datasource
          .getRepository(User)
          .save(user)
          .then((user) => res.send(user))
          .catch((error) => responseAndLogger(res, error.message, 500));
      })
      .catch((error) => responseAndLogger(res, error.message, 500));
  } else {
    responseAndLogger(res, `It is necessary to indicate the id of a user`, 400);
  }
});

router.delete('/', [verifytoken], (req: Request, res: Response) => {
  if (req.query.id) {
    datasource
      .getRepository(User)
      .delete({ id: Number(req.query.id) })
      .then((user) => res.send(user))
      .catch((error) => responseAndLogger(res, error.message, 500));
  } else {
    responseAndLogger(res, `It is necessary to indicate the id of a user`, 400);
  }
});

export default router;
