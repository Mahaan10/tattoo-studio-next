import Header from "@/components/templates/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main
          className="container max-w-screen 2xl:max-w-screen-2xl 2xl:mx-auto overflow-x-hidden 2xl:relative font-clagio bg-carbon-black text-snow min-h-dvh"
          style={{ fontFamily: "Inter" }}
        >
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
