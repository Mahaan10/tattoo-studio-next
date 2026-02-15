import Header from "@/components/templates/Header";
import "./globals.css";
import Providers from "@/components/providers/Providers";

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
          <Providers>
            <Header />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
