"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";

type MenuItem = {
  title: string;
  slug: string;
};

const menuItems: MenuItem[] = [
  { title: "Home", slug: "/" },
  { title: "About Us", slug: "/about-us" },
  { title: "Our Framework", slug: "/our-framework" },
  { title: "Who We Serve", slug: "/who-we-serve" },
  { title: "Blogs", slug: "/blogs" },
  { title: "News", slug: "/news" },
];

// Optimized debounce with better performance
const useDebounce = (callback: () => void, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(true);
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);

  return debouncedValue;
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setNavbarColor(scrollY >= 100);
  }, []);

  // Use optimized debounce hook
  useDebounce(handleScroll, 50);

  useEffect(() => {
    const handleScrollOptimized = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollOptimized, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollOptimized);
  }, [handleScroll]);

  // Memoized menu items to prevent unnecessary re-renders
  const desktopMenuItems = useMemo(
    () =>
      menuItems.map((item) => {
        const isActive = pathname === item.slug;
        return { ...item, isActive };
      }),
    [pathname]
  );

  // Mobile menu variants for smooth animations
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#D9CDBF]"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-2 md:py-3 ">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/sabbir-nasir-png-logo.png"
            alt="Talent Elevate Logo"
            width={180}
            height={50}
            className="w-[55px] md:w-[100px] lg:w-[120px] h-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center space-x-2">
          {desktopMenuItems.map((item) => (
            <motion.div
              key={item.slug}
              className="relative"
              initial={false}
              animate={item.isActive ? { scale: 1.08 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.slug}
                prefetch={true}
                className={clsx(
                  "px-2 2xl:px-4 py-2 rounded-2xl text-lg font-acumin transition-colors duration-200 uppercase",
                  item.isActive
                    ? "text-primary"
                    : "text-[#3E3A5B] hover:text-primary"
                )}
              >
                {item.title}
              </Link>
              {item.isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute left-4 right-4 -bottom-1 h-[3px] bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <motion.button
          className="xl:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            className={clsx(
              "block w-6 h-0.5 bg-black mb-1 rounded transition-all duration-300",
              isMenuOpen && "rotate-45 translate-y-1.5"
            )}
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className={clsx(
              "block w-6 h-0.5 bg-black mb-1 rounded transition-all duration-300"
            )}
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              scale: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className={clsx(
              "block w-6 h-0.5 bg-black rounded transition-all duration-300",
              isMenuOpen && "-rotate-45 -translate-y-1.5"
            )}
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>

        {/* Desktop Actions */}
        <div className="hidden xl:flex">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact-us"
              prefetch={true}
              className="bg-primary text-white px-6 py-2.5 rounded-xl text-base hover:bg-secondary transition duration-300 shadow-sm hover:shadow-md font-open-sans uppercase cursor-pointer"
            >
              Schedule A Call
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Smooth Animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="xl:hidden absolute top-full w-full bg-white shadow-lg overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="flex flex-col items-center py-6 space-y-8"
              variants={mobileMenuVariants}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.slug}
                  variants={mobileItemVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.slug}
                    prefetch={true}
                    className={clsx(
                      "text-base font-medium px-6 py-3 w-full text-center transition-colors duration-200",
                      pathname === item.slug
                        ? "text-primary bg-primary/10"
                        : "text-gray-800 hover:text-primary"
                    )}
                    onClick={() => {
                      setIsMenuOpen(false);
                      // Force immediate navigation
                      window.location.href = item.slug;
                    }}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA Button */}
              <motion.div
                variants={mobileItemVariants}
                className="w-full px-6 pt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact-us"
                  prefetch={true}
                  className="block w-full bg-primary text-white px-6 py-3 rounded-xl text-base text-center font-open-sans uppercase cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href = "/contact-us";
                  }}
                >
                  Schedule A Call
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
