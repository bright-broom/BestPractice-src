"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const router = useRouter();

  const handleLogin = async () => {
    await signIn("credentials", { callbackUrl: "/" }); // 🔥 ログイン後に `/` へリダイレクト
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">ログイン</h1>
      <Button onClick={handleLogin} className="mt-4">ログイン</Button>
    </div>
  );
}
