import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Cashboard",
    default: "Cashboard",
  },
  description:
    "Cashboard is a full stack project developed with a focus on learning",
  metadataBase: new URL("https://next-dashboard-mu-kohl.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
