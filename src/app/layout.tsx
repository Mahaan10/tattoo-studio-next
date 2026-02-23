import Header from "@/components/templates/Header";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import { ToastContainer } from "react-toastify";
//import { Bebas_Neue } from "next/font/google";
import { Encode_Sans } from "next/font/google";

const encode_Sans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
  display: "swap",
  //variable: "--font-bebas-neue",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`antialiased bg-carbon-black ${encode_Sans.className}`}
        >
          <main className="container max-w-screen 2xl:max-w-screen-2xl 2xl:mx-auto overflow-x-hidden 2xl:relative bg-carbon-black text-snow min-h-dvh">
            <Header />
            {children}
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
