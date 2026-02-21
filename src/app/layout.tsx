import Header from "@/components/templates/Header";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className="antialiased bg-carbon-black">
          <main className="container max-w-screen 2xl:max-w-screen-2xl 2xl:mx-auto overflow-x-hidden 2xl:relative bg-carbon-black text-snow min-h-dvh font-crismon">
            <Header />
            {children}
          </main>
          <ToastContainer
            position="top-left"
            autoClose={3000}
            closeOnClick
            pauseOnHover
            newestOnTop
          />
        </body>
      </Providers>
    </html>
  );
}
