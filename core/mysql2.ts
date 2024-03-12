import mysql2 from "mysql2/promise"; 
import * as dotenv from 'dotenv';
dotenv.config();
export const MyQuery = mysql2.createPool({
    host: process.env.HOST_NAME ,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME
  });