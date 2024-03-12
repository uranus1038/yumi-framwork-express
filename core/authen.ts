import jwt from 'jsonwebtoken' ; 
import * as dotenv from 'dotenv';
dotenv.config();
export class Authen {
    private key : any  = process.env.SECRET_KEY  ; 
    public  GenerateToken=(playload:any):string =>
    {
        const result:string =  jwt.sign(playload,this.key, {expiresIn:"1h"});
        return result ;
    }
    public  VitifyToken=(token:string) : any =>
    {
        const result:any =jwt.verify(token, this.key);
        return result ;    
    }
    public  Decodetoken = (token:string): any =>
    {
        const result:unknown =jwt.decode(token);
        return result ;    
    }
}