import { getServerSession } from "next-auth";
import SignInWithGithub from "../components/SignInWithGithub";
import { authOptions } from "../utils/auth";
import SignInForm from "../components/SignInForm";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  return (
    <div className="flex h-full">
      <div className="w-full max-w-xs m-auto bg-base-100 rounded-box p-10 bg-base-200 shadow-lg">
        <h1 className="text-2xl font-bold mb-10 text-center">Please sign in</h1>
        <SignInForm />
        <SignInWithGithub />
      </div>
    </div>
  );
}
