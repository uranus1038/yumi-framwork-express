import express, { Router, Request, Response } from "express";
import { rateLimit } from 'express-rate-limit'
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100,
})

class TestAPI {
    public router: Router;
    constructor() {
        this.router = express.Router();
        this.Init();
    }
    private Init(): void {
        this.router.get('/:Id', limiter, this.get.bind(this));
        this.router.post('/', limiter, this.post.bind(this));
        this.router.put('/', limiter, this.put.bind(this));
        this.router.delete('/:id', limiter, this.delete.bind(this));
    }
    private async get(req: Request, reply: Response): Promise<void> {
        
    }
    private async post(req: Request, reply: Response): Promise<void> {
        
    }
    private async put(req: Request, reply: Response): Promise<void> {
        
    }
    private async delete(req: Request, reply: Response): Promise<void> {
        
    }
}
export default new TestAPI().router;
