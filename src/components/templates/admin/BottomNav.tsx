"use client";

import { NavItem } from "@/components/constants/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

function BottomNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-onyx backdrop-blur-md border-t border-snow/20 z-50">
      <ul className="flex justify-around items-center py-2">
        {items.map((item) => (
          <li key={item.id} className="flex-1">
            <Link
              href={item.href}
              className={`flex flex-col items-center justify-center text-xs gap-1 py-2 transition ${
                isActive(item.href)
                  ? "text-dried-mustard font-bold"
                  : "text-snow/60"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BottomNav;
