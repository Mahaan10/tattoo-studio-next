"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { headerMenu } from "@/components/constants/Navigation";
import { usePathname } from "next/navigation";
import { LuMenu } from "react-icons/lu";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import AuthContainer from "@/components/features/auth/AuthContainer";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!pathname) return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between text-lg font-roboto_condensed font-semibold uppercase px-[5%] transition-all duration-500 ease-in-out ${isScrolled ? "py-3 bg-onyx backdrop-blur-md shadow-md shadow-black" : "py-6 bg-transparent"}
  `}
      >
        {/* small devices menu */}
        <div className="lg:hidden flex items-center justify-center order-2">
          <button
            className="group relative h-14 w-14 flex items-center justify-center rounded-full bg-snow border border-onyx/20 transition-all duration-300 hover:scale-110 active:scale-95 z-50"
            onClick={() => setIsDrawerOpen(true)}
          >
            <LuMenu size={22} className="text-onyx" />
          </button>
        </div>
        {/* Admin Login Modal & Logo */}
        <button
          className="relative w-18 h-18 order-1 lg:order-0"
          onClick={() => setIsModalOpen((prev) => !prev)}
        >
          <Image
            src="/images/Logo.png"
            alt="Logo"
            fill
            quality={75}
            priority
            className="object-cover"
          />
        </button>
        {/* Navabr */}
        <nav className="w-[75%] mx-auto lg:flex hidden lg:items-center lg:justify-center">
          <ul className="w-full lg:static overflow-hidden  lg:rounded-full gap-x-8  lg:flex lg:items-center lg:justify-between px-1">
            {headerMenu.map((item) => (
              <li key={item.id} className="">
                <Link
                  href={item.href}
                  className={`transition-colors duration-200 ${pathname === item?.href ? "text-dried-mustard" : "hover:text-dried-mustard"}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <HeaderMenu isOpen={isDrawerOpen} onOpenChange={setIsDrawerOpen} />

      {isModalOpen && (
        <Modal title="Admin Login" onClose={() => setIsModalOpen(false)}>
          <AuthContainer onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}

export default Header;
