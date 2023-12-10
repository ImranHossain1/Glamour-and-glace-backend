import express, { NextFunction, Request, Response } from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import auth from '../../middlewares/auth';
import { MakeoverServiceController } from './makeoverService.controller';
import { MakeoverServiceValidation } from './makeoverService.validation';

const router = express.Router();
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = MakeoverServiceValidation.createMakeover.parse(
      JSON.parse(req.body.data)
    );
    return MakeoverServiceController.insertIntoDB(req, res, next);
  }
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = MakeoverServiceValidation.updateMakeover.parse(
      JSON.parse(req.body.data)
    );
    return MakeoverServiceController.updateData(req, res, next);
  }
);

router.get('/', MakeoverServiceController.getAllFromDB);

router.get('/:id', MakeoverServiceController.getDataById);

router.get('/:categoryId/category', MakeoverServiceController.getByCategory);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  MakeoverServiceController.deleteData
);

export const MakeoverServiceRoutes = router;
