import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenCAD Library — Searchable Open-Source Hardware Designs",
  description: "Curated database of Creative Commons and open-source hardware CAD files. Search, download, version control, and collaborate on hardware designs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d3576965-8f9b-4518-9215-87a481532c05"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
