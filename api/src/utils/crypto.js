import { scrypt, randomBytes, createCipheriv } from "crypto";
import moment from "moment";

const {
  SALT_BYTES,
  SALT_LENGTH,
  PEPPER,
  HASH_LENGTH,
  IV,
  ENCRYPTION_ALGORITHM,
  ENCRYPTION_KEY
} = process.env;

const encrypt = (text) => {
  const iv = Buffer.from(IV, 'hex')
  const cipher = createCipheriv(ENCRYPTION_ALGORITHM, ENCRYPTION_KEY, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return Buffer.concat([iv, encrypted]).toString('base64')
};

const decrypt = (token) => {
  const combined = Buffer.from(token, 'base64').toString('hex')
  const iv = combined.slice(0, 32)
  const content = combined.slice(32, combined.length)

  const decipher = crypto.createDecipheriv(ENCRYPTION_ALGORITHM, ENCRYPTION_KEY, Buffer.from(iv, 'hex'));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(content, 'hex')), decipher.final()]);

  return decrypted.toString();
};

const createHash = (candidate, salt, resolve, reject) => {
  const seasoned = candidate + PEPPER;
  scrypt(seasoned, salt, Number(HASH_LENGTH), (someError, derivedKey) => {
    if (someError) reject(false);

    const salted = salt + derivedKey.toString("hex");
    const readable = derivedKey.toString("hex");
    resolve({ hash: salted, derived: readable });
  });
};

export const hashPassword = async (password) => new Promise((resolve, reject) => {
  const salt = randomBytes(Number(SALT_BYTES)).toString("hex");

  const extractHash = ({ hash }) => resolve(hash);
  createHash(password, salt, extractHash, reject);
});

export const checkPassword = async (candidate, hash) => new Promise((resolve, reject) => {
  const salt = hash.substring(0, SALT_LENGTH);
  const key = hash.substring(SALT_LENGTH, hash.length);

  const checkEquals = ({ derived }) => {
    key === derived ? resolve(true) : reject(false);
  };
  createHash(candidate, salt, checkEquals, reject);
});

export const createSessionToken = async (userId) => new Promise((resolve, reject) => {
  const configuredToken = {
    userId,
    expiry: moment().add(15, 'minutes').unix()
  }
  const encryptedToken = encrypt(JSON.stringify(configuredToken))

  resolve(encryptedToken)
})

export const validateSessionToken = async (token) => new Promise((resolve, reject) => {
  const decryptedToken = JSON.parse(decrypt(token))

  decryptedToken.expiry >= moment().unix() ? resolve(decryptedToken) : reject(decryptedToken)
})

