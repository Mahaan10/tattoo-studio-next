import Header from "@/components/templates/Header";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import ThemeModeProvider from "@/components/context/ThemeModeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <ThemeModeProvider>
          <body className="antialiased dark:bg-carbon-black bg-snow">
            <main className="container max-w-screen 2xl:max-w-screen-2xl 2xl:mx-auto overflow-x-hidden 2xl:relative bg-snow text-onyx dark:bg-carbon-black dark:text-snow min-h-dvh font-crismon">
              <Header />
              {children}
            </main>
          </body>
        </ThemeModeProvider>
      </Providers>
    </html>
  );
}
