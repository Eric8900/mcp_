'use client'
import Hero from "@/components/Hero";
import MCPRegistry from "@/components/MCPRegistry";
import { NavbarMain } from "@/components/Navbar";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="mt-[1%]">
      <NavbarMain fixed={true} /> 
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
      <MCPRegistry />
      </Suspense>
    </div>
  );
}
