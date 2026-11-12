"use client";

import { useRouter } from "next/navigation";
import Presentacion from "@/components/Presentacion";

export default function PresentacionRoutePage() {
  const router = useRouter();

  return (
    <Presentacion
      onReportar={() => router.push("/reportar")}
    />
  );
}

