"use client";

import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiAndroid,
  SiWordpress,
  SiOpenai,
  SiFigma,
} from "react-icons/si";
import { FaApple } from "react-icons/fa";
import type { IconType } from "react-icons";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainLinks = [
  { label: "Projects", href: "/projects", dim: false },
  { label: "Services", href: "/services", dim: true },
  { label: "About Us", href: "/about-us", dim: false },
];

const secondaryLinks = [
  { label: "Home", href: "/" },
];

const techStack: { label: string; Icon: IconType }[] = [
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "React Native", Icon: SiReact },
  { label: "iOS", Icon: FaApple },
  { label: "Android", Icon: SiAndroid },
  { label: "WordPress", Icon: SiWordpress },
  { label: "AI / LLM", Icon: SiOpenai },
  { label: "UI/UX", Icon: SiFigma },
];

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const tickerX = useMotionValue(0);
  const singleSetRef = useRef<HTMLDivElement>(null);
  const [tickerSetWidth, setTickerSetWidth] = useState(0);

  useEffect(() => {
    if (singleSetRef.current) {
      setTickerSetWidth(singleSetRef.current.scrollWidth);
    }
  }, [isOpen]);

  useAnimationFrame(() => {
    if (tickerSetWidth > 0) {
      const next = tickerX.get() - 0.6;
      tickerX.set(next <= -tickerSetWidth ? next + tickerSetWidth : next);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const containerVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 0 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={containerVariants}
          className="fixed inset-0 z-40 bg-black flex flex-col overflow-hidden"
        >
          {/* Main content area — centered */}
          <div className="flex-1 flex flex-col items-center justify-center pt-28 pb-4">
            <nav aria-label="Main menu" className="text-center flex flex-col gap-4 sm:gap-6">
              {mainLinks.map((link, i) => (
                <motion.div key={link.href} custom={i} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block leading-[0.9] font-bold tracking-tight transition-colors duration-300 select-none ${
                      link.dim
                        ? "text-neutral-500 hover:text-white"
                        : "text-white hover:text-neutral-400"
                    }`}
                    style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Secondary links */}
            <motion.div
              custom={mainLinks.length}
              variants={itemVariants}
              className="flex gap-8 mt-10 justify-center"
            >
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Tech ticker */}
          <motion.div
            custom={mainLinks.length + 1}
            variants={itemVariants}
            className="w-full overflow-hidden border-t border-neutral-800 py-4"
          >
            <motion.div
              className="flex items-center w-max"
              style={{ x: tickerX }}
            >
              {/* Single set — measured for wrap point */}
              <div ref={singleSetRef} className="flex items-center">
                {techStack.map((tech, idx) => (
                  <span key={idx} className="flex items-center gap-2 text-neutral-500 px-8">
                    <tech.Icon size={16} />
                    <span className="text-xs tracking-widest uppercase">{tech.label}</span>
                  </span>
                ))}
              </div>
              {/* Two extra copies for seamless loop */}
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center" aria-hidden>
                  {techStack.map((tech, idx) => (
                    <span key={idx} className="flex items-center gap-2 text-neutral-500 px-8">
                      <tech.Icon size={16} />
                      <span className="text-xs tracking-widest uppercase">{tech.label}</span>
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer row — constrained to site wrapper */}
          <motion.div
            custom={mainLinks.length + 2}
            variants={itemVariants}
            className="w-full border-t border-neutral-800"
          >
            <div
              className="mx-auto px-4 sm:px-6 lg:px-8 w-full sm:w-[90%] py-8 flex items-center justify-between gap-6"
              style={{ maxWidth: "1700px" }}
            >
              <p className="text-neutral-300 text-xs sm:text-base leading-relaxed">
                Ready to build something great?{" "}
                <a
                  href="mailto:office@digantix.com"
                  className="text-white underline underline-offset-4 hover:text-neutral-300 transition-colors duration-300 font-medium"
                >
                  Let&apos;s talk
                </a>
              </p>
              <div className="text-right shrink-0">
                <a
                  href="mailto:office@digantix.com"
                  className="block text-white text-xs sm:text-base hover:text-neutral-300 transition-colors duration-300"
                >
                  office@digantix.com
                </a>
                <a
                  href="tel:+381641482998"
                  className="block text-white text-xs sm:text-base mt-1 hover:text-neutral-300 transition-colors duration-300"
                >
                  +381 64 148 2998
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
