import Redis from "ioredis";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const redis = new Redis();

  const sessionId = cookies().get("session");
  console.log("session id", sessionId);

  redis.set(sessionId.value, JSON.stringify({ name: (await req.json()).name }));
  return new Response("ok");
}
