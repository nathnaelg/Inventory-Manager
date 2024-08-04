import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
require("dotenv").config();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { messages } = req.body;

    const client = new OpenAI({
        apiKey: req.headers["authorization"] as string,
    });

    try {
        const response = await client.chat.completions.create({
            model: "gpt-4o",
            messages: messages
        });
        return res.status(200).json({ data: response.choices[0].message.content });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
}
