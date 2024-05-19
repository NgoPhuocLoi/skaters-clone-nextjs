import { signIn } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("", { redirectTo: "/" });
      }}
    >
      <button
        className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 before:ease relative overflow-hidden bg-emerald-600 text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:before:-translate-x-40 duration-700 h-9 rounded-full px-3"
        type="submit"
      >
        Sign In
        <span className="sr-only">Sign In</span>
      </button>
    </form>
  );
}
