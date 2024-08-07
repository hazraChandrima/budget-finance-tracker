import { Inter, Outfit, Quicksand } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "MoneyMaster",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey="pk_test_bmVhdC10cmVlZnJvZy0yNy5jbGVyay5hY2NvdW50cy5kZXYk">
    <html lang="en">
      <body className={quicksand.className}>
        <Toaster/>
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
