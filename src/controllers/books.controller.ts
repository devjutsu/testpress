import {Express, Request, Response, NextFunction } from 'express';

export const handleGetBookOne = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
    next();
}

export const handleGetBookTwo = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
    return res.send(req.params);
}