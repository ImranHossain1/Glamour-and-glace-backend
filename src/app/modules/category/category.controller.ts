import { Category } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';

const insertIntoDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CategoryService.insertIntoDB(req);
    sendResponse<Category>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category created successfully',
      data: result,
    });
    next();
  }
);

const updateData = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CategoryService.updateData(req.params.id, req);
    sendResponse<Category>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category updated successfully',
      data: result,
    });
    next();
  }
);
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllFromDB();
  sendResponse<Category[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Categories fetched successfully',
    data: result,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getDataById(req.params.id);
  sendResponse<Category>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category fetched successfully',
    data: result,
  });
});

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.deleteData(req.params.id);
  sendResponse<Category>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category deleted successfully',
    data: result,
  });
});

export const CategoryController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateData,
  deleteData,
};
