"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./mobilemenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="wrapper" className="border border-black">
      <div id="headercontainer" className="flex justify-between">
        <Image
          src="/assets/logo.svg"
          alt="Logotype"
          width={500}
          height={500}
          className="w-[200px] md:w-[450px] md:h-[200px] -mt-2 -mb-2 ml-2 "
        ></Image>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black  mr-5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Menu /> : <Menu />}
        </button>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
}
