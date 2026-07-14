import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "Please share a question so I can help you better." },
        { status: 400 },
      );
    }

    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        reply:
          "I’m here to help. Please contact us directly for detailed support.",
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are a helpful assistant for Beltline Global Services Limited. Answer the user's question in a concise and professional way. Keep replies short, friendly, and useful. Company context: Beltline Global provides consulting, education/training, IT services, logistics, general trading/supplies, events, and property support. Office address: Shop 4, Bangor Estate Junction, Kulende, Ilorin, Kwara State. Phone: 08125097090. Email: adam_i41@yahoo.com. User question: ${message}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topP: 0.9,
            maxOutputTokens: 220,
          },
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Google API request failed");
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "I’m here to help. Please contact us directly for detailed support.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error", error);
    return NextResponse.json({
      reply:
        "I’m sorry, I couldn’t reach the assistant right now. Please contact us directly for detailed support.",
    });
  }
}
