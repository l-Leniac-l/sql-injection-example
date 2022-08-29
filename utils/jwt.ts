import { User } from "../services/models/user";
import jwt from "jsonwebtoken";

const jwtSecretKey = process.env.JWT_SECRET_KEY!;

export function generateJwt(userData: User): string {
  return jwt.sign(
    { data: userData, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 },
    jwtSecretKey
  );
}

export function validateJwt(token: string): boolean {
  try {
    jwt.verify(token, jwtSecretKey);
    return true;
  } catch {
    return false;
  }
}
