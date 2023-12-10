import { Feedback } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = async (
  email: string,
  payload: Feedback
): Promise<Feedback> => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not Found');
  }
  payload.userId = user.id;
  const result = await prisma.feedback.create({
    data: payload,
  });
  return result;
};

const getAllFromDB = async () => {
  const result = await prisma.feedback.findMany({
    include: {
      user: true,
    },
  });
  return result;
};

export const FeedbackService = {
  insertIntoDB,
  getAllFromDB,
};
