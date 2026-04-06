"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Header from "@/components/layout/Header";
import { WebGLShader } from "@/components/ui/web-gl-shader";

export default function NotFound() {
  return (
    <>
      <Header dark />
      <div className="relative h-screen w-full bg-black text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <WebGLShader />
        </div>
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/70 to-transparent pointer-events-none z-10" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.p
            className="text-neutral-500 text-xs tracking-widest uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Page not found
          </motion.p>

          <motion.h1
            className="text-white font-bold leading-none tracking-tight"
            style={{ fontSize: "clamp(5rem, 20vw, 16rem)", letterSpacing: "-0.04em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            404
          </motion.h1>

          <motion.p
            className="text-neutral-400 mt-6 text-base sm:text-lg max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            The page you&apos;re looking for doesn&apos;t exist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10"
          >
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors duration-300"
            >
              Go home
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
