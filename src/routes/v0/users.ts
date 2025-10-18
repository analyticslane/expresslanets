import { Router, Request, Response } from 'express';

import User from '../../entities/user';
import verifytoken from '../../middlewares/verifytoken';
import datasource from '../../config/datasource';
import { responseAndLogger } from '../../config/logger';

const router = Router();

/**
 * @openapi
 * /v0/users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a new user
 *     description: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: It is necessary to indicate the parameters 'firstName' and 'lastName' for the creation of a user
 *       500:
 *         description: Internal server error
 */
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
      400,
    );
  }
});

/**
 * @openapi
 * /v0/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     description: Get all users
 *     parameters:
 *       - name: from
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *       - name: take
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 */
router.get('/', [verifytoken], (req: Request, res: Response) => {
  const skip = Number(req.query.from) || 0;
  const take = Number(req.query.take) || 10;

  datasource
    .getRepository(User)
    .find({ skip, take })
    .then((users) => res.send(users))
    .catch((error) => responseAndLogger(res, error.message, 500));
});

/**
 * @openapi
 * /v0/users:
 *   put:
 *     tags:
 *       - Users
 *     summary: Update a user
 *     description: Update a user by id
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: It is necessary to indicate the id of a user
 *       500:
 *         description: Internal server error
 */
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

/**
 * @openapi
 * /v0/users:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete a user
 *     description: Delete a user by id
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: It is necessary to indicate the id of a user
 *       500:
 *         description: Internal server error
 */
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
