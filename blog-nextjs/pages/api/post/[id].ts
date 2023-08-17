import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  try {
    if (req.method == "GET") {
      const response = await fetch(`http://localhost:5000/posts/${id}`);
      const data = await response.json();
      res.status(200).json(data);
    } else if (req.method === "DELETE") {
      const response = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(404).end();
  }
}
