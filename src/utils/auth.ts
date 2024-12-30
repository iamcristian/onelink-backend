import argon from "argon2";

export const hashPassword = async (password: string) => {
  return await argon.hash(password);
};

export const checkPassword = async (password: string, hash: string) => { 
  return await argon.verify(password, hash);
}