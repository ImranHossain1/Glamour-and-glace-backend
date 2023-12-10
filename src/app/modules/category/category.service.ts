import { Category } from '@prisma/client';
import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { IUploadFile } from '../../../interfaces/file';
import { prisma } from '../../../shared/prisma';
const insertIntoDB = async (req: Request): Promise<Category> => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.category.image = uploadedImage.secure_url;
  }

  const result = await prisma.category.create({
    data: req.body.category,
  });
  return result;
};
const updateData = async (id: string, req: Request): Promise<Category> => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.category.image = uploadedImage.secure_url;
  }

  const result = await prisma.category.update({
    where: {
      id,
    },
    data: req.body.category,
  });
  return result;
};

const getAllFromDB = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany({
    include: {
      makeoverServices: true,
    },
  });
  return result;
};

const getDataById = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      makeoverServices: true,
    },
  });
  return result;
};

const deleteData = async (id: string): Promise<Category> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CategoryService = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateData,
  deleteData,
};
