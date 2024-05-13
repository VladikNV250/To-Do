import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TaskSidebar from "@/components/TaskSidebar";

const roboto = Roboto({ 
  subsets: ["cyrillic-ext", "latin-ext"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "To Do",
  description: "To Do by NeM1CHeff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className + " flex overflow-x-hidden"}>
        {children}
      </body>
    </html>
  );
}
