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
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <ul className="flex">
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
