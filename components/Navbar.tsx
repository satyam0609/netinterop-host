"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import { navlinks } from "@/constant/data";
import { Button, NavigateButton } from "./Button";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="py-6 w-full bg-transparent absolute top-0 left-0 z-50">
        <div className="flex gap-4 items-center justify-between max-w-360 px-6 md:px-20 lg:px-25 mx-auto">
          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image src={logo} alt="Net Interop Corp." className="w-18.5 h-11" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md2:flex items-center md2:gap-6 lg:gap-10">
            {navlinks.map((navItems) => (
              <Link
                key={navItems.id}
                href={navItems.link}
                className={`hover:text-green transition-all font-medium duration-100 ease-in hover:scale-105 ${
                  pathname === navItems.link ? "text-green" : "text-primary"
                }`}
              >
                {navItems.title}
              </Link>
            ))}

            <div className="flex items-center gap-6 ml-4">
              {pathname === "/" ? (
                <Button
                  title="(703) 968-9800"
                  className="bg-main py-1!"
                  icon={""}
                />
              ) : (
                <span className="text-primary hover:text-green">
                  (703) 968-9800
                </span>
              )}
              <NavigateButton
                title="Contact"
                className="bg-green text-white py-1!"
                link="/contact"
              />
            </div>
          </nav>

          {/* Hamburger Button (mobile only) */}
          <button
            className="md2:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-primary rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md2:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Menu */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-72 bg-white shadow-2xl flex flex-col pt-24 pb-10 px-8 transition-transform duration-300 ease-in-out md2:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-6">
          {navlinks.map((navItems) => (
            <Link
              key={navItems.id}
              href={navItems.link}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium transition-colors duration-200 hover:text-green ${
                pathname === navItems.link ? "text-green" : "text-primary"
              }`}
            >
              {navItems.title}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-gray-200" />

        {/* CTA Section */}
        <div className="flex flex-col gap-4">
          <span className="text-primary hover:text-green font-medium transition-colors duration-200">
            (703) 968-9800
          </span>
          <Link
            title="Contact"
            className="bg-green text-white py-2! text-center w-full mt-2"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
