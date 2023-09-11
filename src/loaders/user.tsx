import { cookies } from "next/headers";
import { cache } from "react";
import Redis from "ioredis";

export const userLoader = cache(async () => {
  const redis = new Redis();

  const sessionId = cookies().get("session");
  console.log("userLoader", "fetching user by sessionId", sessionId);

  return [sessionId?.value, JSON.parse(await redis.get(sessionId.value))];
});
