import { Feedback } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FeedbackService } from './feedback.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const payload = req?.body;
  const result = await FeedbackService.insertIntoDB(payload);
  sendResponse<Feedback>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Feedback send',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackService.getAllFromDB();
  sendResponse<Feedback[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Feedbacks fetched',
    data: result,
  });
});

export const FeedbackController = {
  insertIntoDB,
  getAllFromDB,
};
