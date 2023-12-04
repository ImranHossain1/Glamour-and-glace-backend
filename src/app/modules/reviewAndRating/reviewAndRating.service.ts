import { ReviewAndRating } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = async (
  payload: ReviewAndRating,
  userId: string
): Promise<ReviewAndRating> => {
  const alreadyReviewed = await prisma.reviewAndRating.findFirst({
    where: {
      makeoverServiceId: payload?.makeoverServiceId,
      userId: userId,
    },
  });
  if (alreadyReviewed)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'We already received your review'
    );
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
