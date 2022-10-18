import { NextFunction, Request, Response } from "express";

export type EnvVars = {
  NODE_ENV: 'production' | 'development' | 'test';
  PORT: number;
  BOT_TOKEN: string;
}

export type EnvVarsFormatted = {
  env: 'production' | 'development' | 'test';
  port: number;
  botToken: string;
}

export type ExpressHandler = (req: Request, res: Response, next: NextFunction) => void;