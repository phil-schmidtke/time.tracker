// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

type Data = {
  token: string | null;
  error: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      const hashPw = await bcrypt.hash(password, 10);
      console.log("hashpw", hashPw);
      const user = await prisma.user.findFirst({
        where: {
          Username: username,
          Password: hashPw,
        },
      });
      console.log("user", user);
      if (user) {
        res.status(200).json({ username, password });
      } else {
        res.status(400).json({ error: "no user found" });
      }
    } else {
      res.status(400).json({ error: "Wrong JSON Body" });
    }
  } else {
    res.status(404).json({ error: "Unsupported HTTP Method" });
  }
  res.status(200).json({ name: "John Doe" });
}
