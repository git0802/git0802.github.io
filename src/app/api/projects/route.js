import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export async function GET(request) {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Missing env variables");

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  const data = query.results; // Assuming `results` is an array of data you want to send in the response

  // Set cache headers
  const cacheControl = `max-age=${60}`; // Cache response for 15 minutes
  const etag = "your-unique-etag-for-this-data"; // Generate a unique ETag for this data

  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": cacheControl,
    ETag: etag,
  };

  // Check if the request has an If-None-Match header to handle conditional GET requests
  const ifNoneMatch = request.headers.get("If-None-Match");
  if (ifNoneMatch === etag) {
    // If the ETag matches, return a 304 Not Modified response without the body
    return new Response(null, { status: 304, headers });
  }

  return new Response(JSON.stringify(data), {
    headers,
  });
}
