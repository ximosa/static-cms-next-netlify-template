"use client";

import classNames from "@/util/classNames.util";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Burger from "./Burger";

import type { FC } from "react";

const Navigation: FC = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6"">
        <ul
          className={classNames(
            `
              opacity-0
              w-full
              h-screen
              text-center
              m-0
              p-0
              fixed
              top-0
              bg-white
              flex
              flex-col
              justify-center
              z-[1]
              translate-y-full
              transition-opacity
              md:opacity-100
              md:w-28
              md:top-auto
              md:block
              md:translate-y-0
            `,
            active && "opacity-100 translate-y-0"
          )}
        >
          <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link className={classNames(pathname === "/" && "text-gray-900 font-bold")} href="/">
              Sobre mi...
            </Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link className={classNames(pathname.startsWith("/posts") && "text-gray-900 font-bold")} href="/posts">
              Blog
            </Link>
          </li>
        </ul>
      </div>
        </nav>
    </>
  );
};

export default Navigation;
