import { deleteCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  deleteCookie("x-app-user", { req, res });

  return res.status(200).end();
}
