import { Request, Response, NextFunction } from "express";

import { ExpressHandler } from "../sharing_types";

const catchAsync = (fn: ExpressHandler) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

export default catchAsync;