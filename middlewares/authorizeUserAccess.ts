import { Request, Response, NextFunction } from 'express';
import { authen, cryptHash } from '../core/umi';
export default class AutorizeUserAccess {
    public static VertifyToken = (req: Request, res: Response, next: NextFunction): void => {
        const token: undefined | string = req.headers.authorization?.split(' ')[1];
        if (typeof token === "string" && token !== undefined) {
            try {
                const decodeCompare = cryptHash.decrypt(token);
                const decoded: any = authen.VitifyToken(decodeCompare);
                req.body.user = decoded;
                next();
            } catch (err: any) {
                res.status(403).json({
                    message: 'คุณไม่ได้รับอนุญาตให้เข้าถึงข้อมูลของผู้ใช้งานนี้'
                })
            }
        }
        else {
            res.status(400).json({
                message: 'โทเคนที่ถูกส่งมาไม่ถูกต้อง',
            })
        }

    };
}