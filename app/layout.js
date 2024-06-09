import { Inter, Outfit, Quicksand } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={quicksand.className}>
        <Toaster/>
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
