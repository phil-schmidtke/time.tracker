// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      const user = await prisma.user.findFirst({
        where: {
          Username: username,
        },
      });
      const login = await bcrypt.compare(password, user.Password);
      if (login) {
        const token = await jwt.sign(username, "08151312");
        console.log("token", token);
        if (token) {
          res.status(200).json({ token });
        }
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
