import { z } from 'zod';

const create = z.object({
  body: z.object({
    comment: z.string({
      required_error: 'Feedback is required',
    }),
  }),
});

export const FeedbackValidation = {
  create,
};
