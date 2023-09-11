"use client";

export function UsernameForm() {
  return (
    <form className="pt-4">
      <input
        className="border-solid border-2 border-gray-300 rounded-md"
        type="text"
        name="name"
        onChange={(e) => {
          fetch("/api/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              name: e.target.value,
            }),
          });
        }}
      />
    </form>
  );
}
