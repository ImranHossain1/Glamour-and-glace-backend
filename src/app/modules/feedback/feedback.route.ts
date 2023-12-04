import express from 'express';

import { FeedbackController } from './feedback.controller';
import { FeedbackValidation } from './feedback.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.CLIENT),
  validateRequest(FeedbackValidation.create),
  FeedbackController.insertIntoDB
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FeedbackController.getAllFromDB
);

export const FeedbackRoutes = router;
