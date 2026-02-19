"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { headerMenu } from "../constants/Navigation";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { LuMenu } from "react-icons/lu";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
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
        className={`absolute top-0 z-50 flex w-full items-center justify-between text-lg font-bebas-neue tracking-widest px-[5%] ${isScrolled ? "fixed top-0 py-5 bg-snow dark:bg-carbon-black" : "pt-10"}`}
      >
        {/* small devices menu */}
        <div className="lg:hidden flex items-center justify-center">
          <button
            className="group relative h-12 w-12 flex items-center justify-center rounded-full bg-carbon-black dark:bg-snow border border-bright-snow/50 dark:border-onyx/20 transition-all duration-300 hover:scale-110 active:scale-95 z-50"
            onClick={() => setIsDrawerOpen(true)}
          >
            <LuMenu size={22} className="dark:text-onyx text-snow" />
          </button>
        </div>
        <div className="relative w-14 h-14">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            fill
            quality={75}
            className="object-cover"
          />
        </div>
        <nav className="w-[75%] lg:flex hidden lg:items-center lg:justify-center">
          <ul className="w-full lg:static overflow-hidden  lg:rounded-full gap-x-8  lg:flex lg:items-center lg:justify-between px-1">
            {headerMenu.map((item) => (
              <li key={item.id} className="">
                <Link
                  href={item.href}
                  className={`transition-colors duration-200 ${pathname === item?.href ? "dark:text-dried-mustard text-black-red" : "dark:hover:text-dried-mustard hover:text-black-red"}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </header>

      <HeaderMenu isOpen={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
    </>
  );
}

export default Header;
