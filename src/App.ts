import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config();
//routes
import TestAPI from "./routes/api"
class HttpWebAppServices {
    private app: express.Application = express();
    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.Init();
    }
    public Init(): void {
        this.app.use("/", TestAPI);
        // set path route 


    }
    public listener(port: number) {
        this.app.listen(port, () => {
            console.log("SERVER_START_PORT : " + port);
        })
    }

}
const app = new HttpWebAppServices();
const port :any = process.env.PORT  || 8000; 
app.listener(port)