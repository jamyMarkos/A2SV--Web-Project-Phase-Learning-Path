import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const blog = req.body;
  try {
    const response = await fetch("http://localhost:5000/posts", {
      method: "POST",
      body: blog,
      headers: { "Content-type": "application/json" },
    });
    const data = response.json();
    res.status(201).json(data);
  } catch (error) {
    res.status(404).end();
  }
}
