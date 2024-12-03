import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { decode } from "./dto";

 
interface CustomRequest extends Request {
    userId?: string; 
}

export function middleware(secret: string) {
    return function (req: CustomRequest, res: Response, next: NextFunction): void {
        const token = req.headers['token'];

        if (!token || typeof token !== 'string') {
            res.status(403).json({
                message: "Token not provided"
            });
            return; 
        }

        try {
            const decodedToken = jwt.verify(token, secret) as decode;
            if (decodedToken && decodedToken.id) {
                req.userId = decodedToken.id; 
                next(); 
            } else {
                res.status(401).json({
                    message: "Invalid token"
                });
                return; 
            }
        } catch (err) {
            res.status(401).json({
                message: "Invalid token"
            });
            return; 
        }
    };
}
