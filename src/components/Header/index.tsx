"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

import { X } from "react-feather";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const headerRef = useRef(null);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const usePathName = usePathname();

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="header left-0 top-0 z-50 flex w-full items-center dark:bg-gray-dark dark:shadow-sticky-dark fixed bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className="header-logo block w-full py-5 lg:py-2"
              >
                <Image
                  src="/images/logo/logo-black.png"
                  alt="logo"
                  width={200}
                  height={80}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo-white.png"
                  alt="logo"
                  width={200}
                  height={80}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
      {showBanner && (
      <div 
        style={{ top: `${headerHeight - 3}px` }}
        className="absolute w-full z-40 bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 text-white flex items-center px-4 py-3 transition-all duration-300 ease-in-out shadow-md"
      >
        <div className="flex-grow" />
        <div className="flex items-center justify-center flex-grow">
          <p className="text-sm font-medium">
            🎓 Winter 2024 Registration Now Open! 
            <Link href="/contact" className="ml-2 underline hover:text-indigo-200">Register Now</Link>
          </p>
        </div>
        <div className="flex-grow flex justify-end">
          <button 
            onClick={() => setShowBanner(false)} 
            className="focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded-full p-1"
            aria-label="Close banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    )}
    </>
  );
};

export default Header;