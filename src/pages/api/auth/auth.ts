// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type Data = {
  token: string | null;
  error: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];
    var decoded = jwt.verify(token, "08151312");
    if (decoded) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "wrong token" });
    }
  }
}
