"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./mobilemenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="wrapper" className="">
      <div id="headercontainer" className="flex justify-between px-3 lg:mx-40">
        <Link href="/"> 
        <Image
          src="/assets/logo.svg"
          alt="Logotype"
          width={500}
          height={500}
          className="w-[220px] md:w-[450px] md:h-[200px]"
        ></Image>
        </Link>
        <div
          id="navlinks"
          className="hidden md:flex  p-5 h-full text-2xl font-serif "
        >
          <Link href="contact" className="p-3 text-black !no-underline font-sans">
            <p>KONTAKT</p>
          </Link>
          <Link href="/" className="p-3 text-black !no-underline font-sans">
            TJÄNSTER
          </Link>
          <Link href="/" className="p-3 text-black !no-underline font-sans">
            OM OSS
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Menu /> : <Menu />}
        </button>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
}
