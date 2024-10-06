import { sql } from '@vercel/postgres';

export async function POST(request) {
  try {
    // Parse request data
    const data = await request.json();
    const { name, email } = data; // Assuming your data contains name and email fields

    // Insert into newsletter table
    await sql`
      INSERT INTO newsletter (name, email)
      VALUES (${name}, ${email})
    `;

    // Return response
    return new Response(
      JSON.stringify({ message: "Data added to newsletter successfully", data }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error adding data to newsletter:', error);
    return new Response(
      JSON.stringify({ message: "Failed to add data to newsletter", error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
