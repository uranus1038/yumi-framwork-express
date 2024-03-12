import { Authen } from "./authen";
import { CryptHash } from "./cryptHash";
import { rateLimit } from 'express-rate-limit'


export const authen = new Authen() ;
export const cryptHash = new CryptHash();

