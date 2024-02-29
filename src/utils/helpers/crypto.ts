import CryptoJS from "crypto-js";

export const encrypt = (data: string): string => {
    const key: any = process.env.REACT_APP_CRYPTOJS_ENCRYPTION_KEY;

    const encrypted = CryptoJS.AES.encrypt(data, key).toString();
    return encodeURIComponent(encrypted);
};

export const decrypt = (encryptedData: string): string | null => {
    try {
        const key: any = process.env.REACT_APP_CRYPTOJS_ENCRYPTION_KEY;

        const decoded = decodeURIComponent(encryptedData)

        const decrypted = CryptoJS.AES.decrypt(decoded, key);
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Decryption error:", error);
        return null;
    }
};