"use client";

import Link from "next/link";
import { useState } from "react";
import { headerMenu } from "../constants/Navigation";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  return (
    <header className="relative lg:sticky top-0 z-50 flex w-full items-center justify-between min-h-20 px-[5%] py-4 text-onyx font-clagio font-bold text-lg">
      <nav className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex-row lg:flex lg:items-center">
          <div className="flex relative z-1 min-h-16 items-center justify-between md:min-h-18 lg:min-h-full lg:px-0">
            <Link href="/" className="p-4 rounded-full bg-snow text-nowrap">
              Block 13 Tattoo
            </Link>
          </div>
          <ul className="w-full px-8 lg:static bg-snow overflow-hidden min-h-16 lg:rounded-full gap-x-8 lg:ml-8 lg:flex lg:items-center lg:justify-center lg:min-h-14 hidden">
            {headerMenu.map((item) => (
              <li key={item.id} className="">
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden h-full lg:gap-4 xl:flex">
          <Link
            href="/booking"
            className="inline-flex justify-center w-full md:w-fit h-12 transition-all duration-300 bg-snow text-onyx hover:bg-onyx hover:text-snow flex-nowrap p-4 rounded-full items-center text-center"
          >
            Book an appointment
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
