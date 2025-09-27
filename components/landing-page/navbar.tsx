import Image from "next/image";

import { useEffect, useState } from "react";

export default function ScrollNavbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl z-50 transition-transform duration-300 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl border border-gray-200 ${show ? "translate-y-0" : "-translate-y-full"
        }`}
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <div>
          <Image src="/ad.png" alt="logo" width="50" height="50"/>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="text-gray-700 hover:text-green-700 font-medium transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-green-700 font-medium transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-green-700 font-medium transition-colors">Mentors</a>
          <a href="#contact" className="text-gray-700 hover:text-green-700 font-medium transition-colors">Sign up</a>
        </div>
        <button className="md:hidden text-green-700 hover:bg-green-50 rounded-full p-2 transition-colors">
          <span className="sr-only">Open menu</span>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </nav>
  );
}