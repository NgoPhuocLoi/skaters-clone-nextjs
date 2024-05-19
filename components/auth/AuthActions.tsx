import { auth, signOut } from "@/auth";
import { SignIn } from "./SignIn";
import Image from "next/image";
import { SignOut } from "./SignOut";

export default async function AuthActions() {
  const session = await auth();
  return !session || !session.user ? (
    <SignIn />
  ) : (
    <div className="flex gap-4 items-center">
      <div className="w-[36px] h-[36px] rounded-full">
        <Image
          className="object-contain object-center rounded-full"
          src={session!.user!.image!}
          alt="User's avatar"
          width={36}
          height={36}
        />
      </div>

      <SignOut />
    </div>
  );
}
