import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("kjdhfkjsdhf");
  try {
    const response = await fetch("http://localhost:5000/posts");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).end();
  }
}
