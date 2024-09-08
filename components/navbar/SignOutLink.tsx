"use client";

import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { SignOutButton } from "@clerk/nextjs";

const SignOutLink = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({ description: "Has cerrado sesión correctamente" });
  };

  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Cerrar sesión
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
