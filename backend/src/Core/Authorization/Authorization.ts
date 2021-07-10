import * as RandomString from 'crypto-random-string';
import * as NodeRSA from 'node-rsa';
import * as fs from 'fs';

const generateSalt = () =>
    RandomString({ length: 256, type: 'ascii-printable' });

const getIterations = () => 1;

const encryptRSA = (text: string) => {
    const data = fs.readFileSync(`${__dirname}/Keys/public.der`);
    const publicKey = new NodeRSA(data, 'pkcs8-public-der');
    return publicKey.encrypt(text, 'base64');
};

const decryptRSA = (text: string) => {
    const data = fs.readFileSync(`${__dirname}/Keys/private.der`);
    const privateKey = new NodeRSA(data, 'pkcs8-private-der');
    return privateKey.decrypt(text, 'utf8');
};

const Authorization = {
    generateSalt,
    getIterations,
    encryptRSA,
    decryptRSA
};

export default Authorization;
