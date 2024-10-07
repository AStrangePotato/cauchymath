import { sql } from "@vercel/postgres";

export async function GET(request) {
  try {
    const [newslettersRes, messagesRes] = await Promise.all([
      sql`SELECT name, email FROM newsletter`,
      sql`SELECT name, email, message FROM messages`,
    ]);

    return new Response(
      JSON.stringify({
        newsletters: newslettersRes.rows,
        messages: messagesRes.rows,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Database error: ", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "Failed to fetch data", 
        error: error.message,
        stack: error.stack
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}