"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const FileUploadHelper_1 = require("../../../helpers/FileUploadHelper");
const prisma_1 = require("../../../shared/prisma");
const insertIntoDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const uploadedImage = yield FileUploadHelper_1.FileUploadHelper.uploadToCloudinary(file);
    if (uploadedImage) {
        req.body.category.image = uploadedImage.secure_url;
    }
    const result = yield prisma_1.prisma.category.create({
        data: req.body.category,
    });
    return result;
});
const updateData = (id, req) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const uploadedImage = yield FileUploadHelper_1.FileUploadHelper.uploadToCloudinary(file);
    if (uploadedImage) {
        req.body.category.image = uploadedImage.secure_url;
    }
    const result = yield prisma_1.prisma.category.update({
        where: {
            id,
        },
        data: req.body.category,
    });
    return result;
});
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.findMany({
        include: {
            makeoverServices: true,
        },
    });
    return result;
});
const getDataById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.findUnique({
        where: {
            id,
        },
        include: {
            makeoverServices: true,
        },
    });
    return result;
});
const deleteData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.CategoryService = {
    insertIntoDB,
    getAllFromDB,
    getDataById,
    updateData,
    deleteData,
};
