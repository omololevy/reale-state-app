import bcrypt from "bcrypt";

export const hashPassword = async (password: string) =>
  bcrypt.hash(password, 10);
export const comparePasswords = async (
  plainPassword: string,
  hashPassword: string
) => {
  return bcrypt.compare(plainPassword, hashPassword);
};
