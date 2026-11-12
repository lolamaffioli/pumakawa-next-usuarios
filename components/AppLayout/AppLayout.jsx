"use client";

import { usePathname } from "next/navigation";
import NavBar from "../Navbar/NavBar";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import { InfoModalProvider } from "./InfoModalContext";

/* ── Components for Layout ── */
export const PumaRedLogo = () => (
  <div className="logo-container">
    <img
      src="/PNG/PUMARED (logo)-BLANCO.png"
      alt="PUMARED"
      className="logo-image"
    />
    <p className="logo-subtitle">RED CIUDADANA DE ALERTA TEMPRANA DE PUMAS</p>
  </div>
);

/* ── Mapa de ruta → variante ── */
const ROUTE_VARIANT = {
  "/reportar": "report",
  "/home": "home",
  "/mapa": "mapa",
  "/protocolo": "protocolo",
  "/presentacion": "home",
};

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const variant = ROUTE_VARIANT[pathname] ?? "report";

  return (
    <InfoModalProvider>
      <div className="app-shell">
        {/* Background with Overlay */}
        <div className="bg-container">
          <img src="/assets/puma-bg.png" alt="Puma Background" className="bg-image" />
          <div className="bg-overlay"></div>
        </div>

        {pathname !== "/" && pathname !== "/presentacion" && pathname !== "/home" && (
          <>
            <NavBar variant={variant} />
            <div className="nb-spacer" />
          </>
        )}

        <main className="content-wrapper">
          {children}
          <Footer />
        </main>

        <Card />
      </div>
    </InfoModalProvider>
  );
}

