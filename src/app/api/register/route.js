import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, grade, phone, message } = await req.json();

    if (!name || !grade || !phone || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Send email via Resend
    await resend.emails.send({
      from: "U GOT A STUDENT!!!<onboarding@resend.dev>", // keep this domain for now
      to: ["danielzhang.936@gmail.com"],          // your email inbox
      subject: "LOCK IN",
      text: `
A new student has registered for tutoring:

Name: ${name}
Grade: ${grade}
Phone: ${phone}

Message:
${message}
      `,
    });

    return new Response(
      JSON.stringify({ message: "Registration submitted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Resend error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to submit registration" }),
      { status: 500 }
    );
  }
}
