import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../shared/prisma';

const getUserProfile = async (userId: string): Promise<Partial<User>> => {
  const result = await prisma.user.findUnique({
    where: {
      email: userId,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not Found');
  }

  return result;
};
const getSingleUserProfile = async (userId: string): Promise<Partial<User>> => {
  const result = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not Found');
  }

  return result;
};
const updateUserProfile = async (
  userId: string,
  payload: Partial<User>
): Promise<Partial<User>> => {
  const result = await prisma.user.update({
    where: {
      email: userId,
    },
    data: payload,
  });
  return result;
};

export const UserProfileService = {
  getUserProfile,
  updateUserProfile,
  getSingleUserProfile,
};
