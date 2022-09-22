import { Request, Response, NextFunction } from 'express';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  return console.log('register');
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  return console.log('login');
};

export const profile = async (req: Request, res: Response, next: NextFunction) => {
  return console.log('profile');
};
