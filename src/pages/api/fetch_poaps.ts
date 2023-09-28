// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPoaps } from "@/lib/getPoaps";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  poaps: poap[];
};

// Patch preventing CORS error from localhost:3000
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let data: poap[] = await getPoaps("nbiondini.eth");
  res.status(200).json({ poaps: data });
}
