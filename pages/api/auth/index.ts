import { NextApiRequest, NextApiResponse } from "next";
import { mapUser, MysqlUser } from "../../../services/mappers/mapUser";
import { executeQuery } from "../../../utils/db";
import { deleteCookie, setCookie } from "cookies-next";
import { generateJwt } from "../../../utils/jwt";
import crypto from "crypto";

type ErrorResponse = {
  error: unknown;
};

function getAuthDetails(authorization: string): string[] {
  const base64 = authorization.replace("Basic ", "");

  const buffer = Buffer.from(base64, "base64");

  const str = buffer.toString("utf-8");

  const [user, password] = str.split(":");

  const md5password = crypto.createHash("md5").update(password).digest("hex");

  return [user, md5password];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  if (!req.headers.authorization) {
    return res.status(403).end();
  }

  const [user, password] = getAuthDetails(req.headers.authorization);

  const query = `SELECT id, first_name, last_name, is_admin FROM users WHERE email='${user}' AND password_md5='${password}'`;

  const result = await executeQuery<MysqlUser[]>({ query });

  if ("error" in result) {
    deleteCookie("x-app-user", { req, res });
    return res.status(500).json({ error: result.error });
  }

  const userData = result[0];

  if (!userData) {
    deleteCookie("x-app-user", { req, res });
    return res.status(401).end();
  }

  const token = generateJwt(mapUser(userData));

  const expires = new Date(new Date().getTime() + 86400000);

  setCookie("x-app-user", token, {
    req,
    res,
    httpOnly: true,
    sameSite: true,
    expires,
  });

  return res.status(200).end();
}
