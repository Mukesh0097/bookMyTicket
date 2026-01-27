import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';
import logger from '../config/logger';

export function validateData(schema: z.ZodObject<any, any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // TypeScript now knows error is ZodError type
        const errorMessages = error.issues.map((issue) => ({
          message: `${issue.path.join('.')} is ${issue.message}`,
        }));

        logger.error('Validation error details:', errorMessages);

        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: 'Invalid data', details: errorMessages });
      }

      next(error);
    }
  };
}
