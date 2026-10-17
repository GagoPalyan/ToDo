import type { NextFunction, Request, RequestHandler, Response } from "express";
import type { ZodType } from "zod";

const validateBody =
  (schema: ZodType): RequestHandler =>
  (req: Request, _res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);

      next();
    } catch (error) {
      next(error);
    }
  };

const validateParams =
  (schema: ZodType): RequestHandler =>
  (req: Request, _res: Response, next: NextFunction) => {
    try {
      schema.parse(req.params);

      next();
    } catch (error) {
      next(error);
    }
  };

const validateQuery =
  (schema: ZodType): RequestHandler =>
  (req, _res, next) => {
    try {
      req.validatedQuery = schema.parse(req.query);

      next();
    } catch (error) {
      next(error);
    }
  };

export { validateBody, validateParams, validateQuery };
