import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="rounded-md border p-2">
        Sign Out
      </button>
    </form>
  );
}
