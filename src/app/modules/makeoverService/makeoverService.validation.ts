import { z } from 'zod';

const createMakeover = z.object({
  makeover: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    information: z.array(
      z.string({
        required_error: 'Information is required',
      }),
      {
        required_error: 'Information are required',
      }
    ),
    availability: z.boolean().optional(),
    categoryId: z.string({
      required_error: 'Category Id is required',
    }),
  }),
});
const updateMakeover = z.object({
  makeover: z.object({
    title: z.string().optional(),
    price: z.number().optional(),
    information: z
      .array(
        z.string({
          required_error: 'Information is required',
        })
      )
      .optional(),
    image: z.string().optional(),
    availability: z.boolean().optional(),
    categoryId: z.string().optional(),
  }),
});

export const MakeoverServiceValidation = {
  createMakeover,
  updateMakeover,
};
