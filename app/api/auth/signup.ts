import { NextApiRequest, NextApiResponse } from "next";

export default async function signupHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { email, password } = req.body;

  console.log("Signup:", { email, password });

  return res.status(200).json({ message: "User signed up successfully!" });
}
