import { Feedback } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = async (
  payload: Feedback,
): Promise<Feedback> => {
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
