"use client";

import { PumaRedLogo } from "@/components/AppLayout/AppLayout";
import Hero from "@/components/Hero/Hero";

export default function RootHomePage() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <PumaRedLogo />
      </header>

      <Hero />
    </>
  );
}
