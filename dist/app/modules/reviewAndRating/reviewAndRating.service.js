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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewAndRatingService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = require("../../../shared/prisma");
const insertIntoDB = (payload, userId, id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.findUnique({
        where: {
            email: userId,
        },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'User not Found');
    }
    payload.bookingId = id;
    payload.userId = user.id;
    const result = yield prisma_1.prisma.reviewAndRating.create({
        data: payload,
    });
    return result;
});
const updateData = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.prisma.reviewAndRating.findUnique({
        where: {
            id,
        },
    });
    if (!isExist)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Not found');
    const result = yield prisma_1.prisma.reviewAndRating.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.prisma.reviewAndRating.findUnique({
        where: {
            id,
        },
    });
    if (!isExist)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Not found');
    yield prisma_1.prisma.reviewAndRating.delete({
        where: {
            id,
        },
    });
});
const getReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.reviewAndRating.findMany({
        include: {
            user: true,
        },
        take: 10,
    });
    return result;
});
exports.ReviewAndRatingService = {
    insertIntoDB,
    updateData,
    deleteData,
    getReviews,
};
