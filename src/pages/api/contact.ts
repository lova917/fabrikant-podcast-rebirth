import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, message, source, timestamp } = req.body;

    // Send data to n8n webhook
    const response = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        source,
        timestamp,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit to n8n");
    }

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
} 