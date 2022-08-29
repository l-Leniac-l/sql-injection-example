import { deleteCookie, getCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import { validateJwt } from "../../../utils/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const token = getCookie("x-app-user", { req, res });

  if (!token) {
    return res.status(403).end();
  }

  const isValid = validateJwt(String(token));

  if (!isValid) {
    deleteCookie("x-app-user", { req, res });
    return res.status(401).end();
  }

  return res.status(200).end();
}
