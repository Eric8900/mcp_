import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MCP_",
    template: "%s | MCP_",
  },
  description: "Explore the registry of Model Context Protocol (MCP) servers built for Claude, Cline, Cursor, Windsurf, and more. Turn AI LLMs into efficient agents with MCP servers.",
  metadataBase: new URL("https://mcpw.vercel.app"),
  openGraph: {
    title: "MCP_",
    description: "Explore the registry of Model Context Protocol (MCP) servers built for Claude, Cline, Cursor, Windsurf, and more. Turn AI LLMs into efficient agents with MCP servers.",
    url: "https://mcpw.vercel.app",
    siteName: "MCP_",
    images: [
      {
        url: "https://mcpw.vercel.app/mcp-og-image.png",
        width: 1000,
        height: 640,
        alt: "MCP_ - Model Context Protocol Registry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP_",
    description: "Explore the registry of Model Context Protocol (MCP) servers built for Claude, Cline, Cursor, Windsurf, and more. Turn AI LLMs into efficient agents with MCP servers.",
    images: ["https://mcpw.vercel.app/mcp-og-image.png"],
    creator: "@ericchen890",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0B8C5E",
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#0B8C5E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors closeButton/>
      </body>
    </html>
  );
}
