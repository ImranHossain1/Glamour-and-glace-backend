import { z } from 'zod';

const create = z.object({
  body: z.object({
    review: z.string().optional(),
    rating: z.number().optional(),
  }),
});

const update = z.object({
  body: z.object({
    review: z.string().optional(),
    rating: z.number().optional(),
  }),
});

export const ReviewAndRatingValidation = {
  create,
  update,
};
