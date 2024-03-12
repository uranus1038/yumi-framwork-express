import * as CryptoJS from 'crypto-js';
import * as dotenv from 'dotenv';
dotenv.config();
export class CryptHash {
    private key: any = process.env.HASH_KEY;
    public  encrypt(plainText: string): string {
        try {
            const encryptedText = CryptoJS.AES.encrypt(plainText, this.key).toString();
            return encryptedText;
        } catch (err) {
            return "";
        }
    }
    public  decrypt(encryptedText: string): string {
        const decryptedText = CryptoJS.AES.decrypt(encryptedText, this.key).toString(CryptoJS.enc.Utf8);
        return decryptedText;
    }
    public  getSecretKey(): string {
        const randomBytes = CryptoJS.lib.WordArray.random(16);
        return randomBytes.toString(CryptoJS.enc.Hex);
    }
}