"use client";

import { useRouter } from "next/navigation";
import Presentacion from "@/components/Presentacion";

export default function HomeRoutePage() {
  const router = useRouter();

  return (
    <Presentacion
      onReportar={() => router.push("/reportar")}
    />
  );
}

