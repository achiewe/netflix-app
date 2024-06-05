import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Netflix",
  description:
    "The Netflix Clone project, titled, Streamline is a comprehensive web application designed to emulate the core functionalities and user experience of the popular streaming service, Netflix. The project encompasses a wide range of features to deliver a seamless, engaging, and intuitive streaming experience for users.",
};

// RootLayout the function where render components
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
