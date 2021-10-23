import { scrypt, randomBytes } from "crypto";

const {
  SALT_BYTES,
  SALT_LENGTH,
  PEPPER,
  HASH_LENGTH,
} = process.env;

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
