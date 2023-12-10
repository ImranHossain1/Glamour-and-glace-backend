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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeoverServiceService = void 0;
const FileUploadHelper_1 = require("../../../helpers/FileUploadHelper");
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = require("../../../shared/prisma");
const makeoverService_constants_1 = require("./makeoverService.constants");
const insertIntoDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const uploadedImage = yield FileUploadHelper_1.FileUploadHelper.uploadToCloudinary(file);
    if (uploadedImage) {
        req.body.makeover.image = uploadedImage.secure_url;
    }
    const result = yield prisma_1.prisma.makeoverService.create({
        data: req.body.makeover,
    });
    return result;
});
const updateData = (id, req) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.file !== undefined) {
        const file = req.file;
        const uploadedImage = yield FileUploadHelper_1.FileUploadHelper.uploadToCloudinary(file);
        if (uploadedImage) {
            req.body.makeover.image = uploadedImage.secure_url;
        }
    }
    const result = yield prisma_1.prisma.makeoverService.update({
        where: {
            id,
        },
        data: req.body.makeover,
    });
    return result;
});
const getAllFromDB = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { search, maxPrice, minPrice } = filters, filtersData = __rest(filters, ["search", "maxPrice", "minPrice"]);
    const andConditions = [];
    if (search) {
        andConditions.push({
            OR: makeoverService_constants_1.makeoverServiceSearchableFields.map((field) => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive',
                },
            })),
        });
    }
    if (Object.keys(filtersData).length > 0) {
        andConditions.push({
            AND: Object.keys(filtersData).map(key => ({
                [key]: {
                    equals: filtersData[key],
                    mode: 'insensitive',
                },
            })),
        });
    }
    if (maxPrice) {
        andConditions.push({
            price: {
                lte: parseFloat(maxPrice),
            },
        });
    }
    if (minPrice) {
        andConditions.push({
            price: {
                gte: parseFloat(minPrice),
            },
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : { AND: {} };
    const result = yield prisma_1.prisma.makeoverService.findMany({
        where: whereConditions,
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder,
            }
            : {
                createdAt: 'desc',
            },
        include: {
            category: true,
        },
    });
    return result;
});
const getDataById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.makeoverService.findUnique({
        where: {
            id,
        },
        include: {
            bookings: {
                include: {
                    reviewAndRating: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            category: true,
        },
    });
    return result;
});
const deleteData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.makeoverService.delete({
        where: {
            id,
        },
    });
    return result;
});
const getByCategory = (id, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const result = yield prisma_1.prisma.makeoverService.findMany({
        where: {
            categoryId: id,
        },
        skip,
        take: size,
        include: {
            bookings: {
                include: {
                    reviewAndRating: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
        },
    });
    const total = yield prisma_1.prisma.makeoverService.count({
        where: {
            categoryId: id,
        },
    });
    const totalPage = Math.ceil(total / size);
    return {
        meta: {
            page,
            size,
            total,
            totalPage,
        },
        data: result,
    };
});
exports.MakeoverServiceService = {
    insertIntoDB,
    getAllFromDB,
    getDataById,
    updateData,
    deleteData,
    getByCategory,
};
