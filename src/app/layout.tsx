import Header from "@/components/templates/Header";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import { ToastContainer } from "react-toastify";
import { Roboto_Condensed } from "next/font/google";
import { Encode_Sans } from "next/font/google";
import Footer from "@/components/templates/Footer";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  variable: "--font-roboto-condensed",
});

const encode_sans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
  display: "swap",
  variable: "--font-encode_sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto_condensed.variable} ${encode_sans.variable}`}
    >
      <Providers>
        <body
          className={`antialiased bg-carbon-black ${encode_sans.className}`}
        >
          <main className="container max-w-screen 2xl:max-w-screen-2xl 2xl:mx-auto overflow-x-hidden 2xl:relative bg-carbon-black text-snow min-h-dvh">
            <Header />
            {children}
            <Footer />
          </main>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            closeOnClick
            pauseOnHover
            newestOnTop
            hideProgressBar={false}
            closeButton={false}
            toastClassName="custom-toast"
            progressClassName="custom-toast-progress"
          />
        </body>
      </Providers>
    </html>
  );
}
