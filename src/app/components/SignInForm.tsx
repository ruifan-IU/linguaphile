"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignInForm() {
  const [email, setEmail] = useState<string>('');

  async function SignInWithEmail() {
    const signInResult = await signIn('email', {
      email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signInResult?.ok) {
      return toast('Failed to send email!');
    }

    return toast('Email sent! Check your inbox for the magic link.');
  }

  return (
    <form className="form-control" action={SignInWithEmail}>
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input
        name="email"
        type="email"
        placeholder="email@example.com"
        className="input input-bordered"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn btn-primary text-lg w-full mt-5">
        Login with email
      </button>
    </form>
  );
}
