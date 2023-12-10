import { z } from 'zod';

const createCategory = z.object({
  category: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    information: z.array(
      z.string({
        required_error: 'Information is required',
      }),
      {
        required_error: 'Information are required',
      }
    ),
  }),
});
const updateCategory = z.object({
  category: z.object({
    title: z.string().optional(),
    information: z
      .array(
        z.string({
          required_error: 'Information is required',
        })
      )
      .optional(),
  }),
});

export const CategoryValidation = {
  updateCategory,
  createCategory,
};
