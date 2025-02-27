import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "No message provided" }, { status: 400 });
    }

    // Hard-coded responses
    const responses: { [key: string]: string } = {
      "hello": "Hey there! How can I help you?",
      "how are you": "I'm just a bot, but I'm doing great!",
      "what is your name": "I'm a simple chatbot!",
      "bye": "Goodbye! Have a great day!",
    };

    // Find a response or return a default message
    const reply = responses[message.toLowerCase()] || "I'm not sure how to respond to that.";

    return NextResponse.json({ message: reply }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
