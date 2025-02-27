import { NextResponse } from "next/server";

// Removed the OpenAI SDK import
// Removed OpenAI initialization

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    // Replace OpenAI API logic with placeholder response or remove entirely
    return NextResponse.json({ message: "Your message was received!" }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error occurred:", error);

    // General error handling (no OpenAIError check required anymore)
    return NextResponse.json({ error: 'Unable to process request. Please try again later.' }, { status: 500 });
  }
}
