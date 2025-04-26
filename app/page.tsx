'use client'
import Hero from "@/components/Hero";
import MCPRegistry from "@/components/MCPRegistry";
import { NavbarMain } from "@/components/Navbar";
import { LoaderCircle } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="mt-[1%]">
      <NavbarMain fixed={true} />
      <Hero />
      <Suspense fallback={
        <div className="flex justify-center items-center p-6 gap-6">
          <LoaderCircle className="animate-spin text-gray-500" size={100} />
        </div>
      }>
        <MCPRegistry />
      </Suspense>
    </div>
  );
}
