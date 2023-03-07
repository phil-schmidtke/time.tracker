// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      const hashPw = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          Mail: email,
          Username: username,
          Password: hashPw,
        },
      });
      if (user) {
        res.status(200).json({ message: "User created Successfully" });
      } else {
        res.status(400).json({ error: "no user found" });
      }
    } else {
      res.status(400).json({ error: "Wrong JSON Body" });
    }
  } else {
    res.status(404).json({ error: "Unsupported HTTP Method" });
  }
}
