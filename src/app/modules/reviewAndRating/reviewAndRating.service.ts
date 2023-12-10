import { ReviewAndRating } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = async (
  payload: ReviewAndRating,
  userId: string,
  id: string
): Promise<ReviewAndRating> => {
  const user = await prisma.user.findUnique({
    where: {
      email: userId,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not Found');
  }

  payload.bookingId = id;
  payload.userId = user.id;

  const result = await prisma.reviewAndRating.create({
    data: payload,
  });
  return result;
};

const updateData = async (
  payload: Partial<ReviewAndRating>,
  id: string
): Promise<ReviewAndRating> => {
  const isExist = await prisma.reviewAndRating.findUnique({
    where: {
      id,
    },
  });
  if (!isExist) throw new ApiError(httpStatus.BAD_REQUEST, 'Not found');

  const result = await prisma.reviewAndRating.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteData = async (id: string): Promise<void> => {
  const isExist = await prisma.reviewAndRating.findUnique({
    where: {
      id,
    },
  });
  if (!isExist) throw new ApiError(httpStatus.BAD_REQUEST, 'Not found');

  await prisma.reviewAndRating.delete({
    where: {
      id,
    },
  });
};

const getReviews = async (): Promise<ReviewAndRating[]> => {
  const result = await prisma.reviewAndRating.findMany({
    include: {
      user: true,
    },
    take: 10,
  });
  return result;
};

export const ReviewAndRatingService = {
  insertIntoDB,
  updateData,
  deleteData,
  getReviews,
};
