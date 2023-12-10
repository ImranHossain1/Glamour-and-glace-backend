import express from 'express';

import { ReviewAndRatingController } from './reviewAndRating.controller';
import { ReviewAndRatingValidation } from './reviewAndRating.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/:id',
  auth(ENUM_USER_ROLE.CLIENT),
  validateRequest(ReviewAndRatingValidation.create),
  ReviewAndRatingController.insertIntoDB
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.CLIENT),
  validateRequest(ReviewAndRatingValidation.update),
  ReviewAndRatingController.updateData
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.CLIENT),
  ReviewAndRatingController.deleteData
);

router.get('/', ReviewAndRatingController.getReviews);

export const ReviewAndRatingRoutes = router;
