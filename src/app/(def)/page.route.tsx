import { userLoader } from "loaders/user";
import { cookies, headers } from "next/headers";
import { UsernameForm } from "./UsernameForm";

export default async function MyPage() {
  return (
    <div>
      <h1 className="text-xl font-bold">My Page</h1>
      <pre>
        <code>
          session:{" "}
          {JSON.stringify(
            [cookies().get("session"), cookies().get("x-session")],
            null,
            2
          )}
        </code>
      </pre>
      <pre className="pt-4">
        <code>user: {JSON.stringify(await userLoader(), null, 2)}</code>
      </pre>

      <UsernameForm />
    </div>
  );
}
