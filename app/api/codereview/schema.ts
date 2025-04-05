import { z } from 'zod';

export const codeReviewSchema = z.object({
    /* notifications: z.array(
        z.object({
          name: z.string().describe('Name of a fictional person.'),
          message: z.string().describe('Message. Do not use emojis or links.'),
        }),
      ), */
    code: z.object({
        isValid: z.boolean().describe('Is the code valid?'),
        message: z.string().describe('Message. Do not use emojis or links.'),
        correctCode: z.string().describe('Correct code based on the provided input.'),
    })
});