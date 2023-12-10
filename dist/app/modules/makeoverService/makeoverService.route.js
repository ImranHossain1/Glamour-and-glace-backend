"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeoverServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const FileUploadHelper_1 = require("../../../helpers/FileUploadHelper");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const makeoverService_controller_1 = require("./makeoverService.controller");
const makeoverService_validation_1 = require("./makeoverService.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), FileUploadHelper_1.FileUploadHelper.upload.single('file'), (req, res, next) => {
    req.body = makeoverService_validation_1.MakeoverServiceValidation.createMakeover.parse(JSON.parse(req.body.data));
    return makeoverService_controller_1.MakeoverServiceController.insertIntoDB(req, res, next);
});
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), FileUploadHelper_1.FileUploadHelper.upload.single('file'), (req, res, next) => {
    req.body = makeoverService_validation_1.MakeoverServiceValidation.updateMakeover.parse(JSON.parse(req.body.data));
    return makeoverService_controller_1.MakeoverServiceController.updateData(req, res, next);
});
router.get('/', makeoverService_controller_1.MakeoverServiceController.getAllFromDB);
router.get('/:id', makeoverService_controller_1.MakeoverServiceController.getDataById);
router.get('/:categoryId/category', makeoverService_controller_1.MakeoverServiceController.getByCategory);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), makeoverService_controller_1.MakeoverServiceController.deleteData);
exports.MakeoverServiceRoutes = router;
