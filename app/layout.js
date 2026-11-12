import "./globals.css";
import AppLayout from "@/components/AppLayout/AppLayout";

export const metadata = {
  title: "PumaRed — Red Ciudadana de Alerta Temprana de Pumas",
  description:
    "PumaRed — Red Ciudadana de Alerta Temprana de Pumas. Ayudanos a conservar el puma en Argentina. Tu reporte es fundamental para proteger nuestra fauna nativa.",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport = {
  themeColor: "#F28A00",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
