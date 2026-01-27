import express from 'express';
import { validateData } from '../middleware/validationMiddleware';
import { userLoginSchema, userRegistrationSchema } from '../schemas/userSchema';
import { prisma } from '../lib/prisma';
import logger from '../config/logger';
// import logger from '../config/logger';

const router = express.Router({ mergeParams: true });

router.post('/register', validateData(userRegistrationSchema), async (req, res, next) => {
  const { email } = req.body;
  try {
    const isUserExists = await prisma.user.findUnique({
      where: { email },
    });

    if (!isUserExists) {
      const createNewUser = await prisma.user.create({
        data: req.body,
      });
      logger.info('New user registered:', createNewUser);
      return res.status(201).send('User registered successfully');
    }

    return res.status(409).send('User already exists');
  } catch (error) {
    logger.error('Error during user registration:', error);
    next(error);
  }
});

router.post('/login', validateData(userLoginSchema), (req, res) => {
  res.send('Welcome for login');
});

router.post('/logout', (req, res) => {
  res.send('Welcome for logout');
});

export default router;
