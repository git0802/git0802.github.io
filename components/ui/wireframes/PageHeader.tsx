"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

import type { ReactNode } from "react";

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface PageHeaderProps {
  title: string;
  description: string;
  caption?: string;
  headerImage?: ReactNode;
}

function PageHeader({
  title,
  description,
  caption = "",
  headerImage = null,
}: PageHeaderProps) {
  return (
    <header
      id="page-header"
      className={clsx(
        "background-grid background-grid--fade-out border-slate-200 z-[900] mb-10 border-b pb-10 pt-32",
        "md:mb-0 md:border-none md:pb-20 md:pt-40",
        "dark:border-slate-800"
      )}
    >
      {headerImage && (
        <div
          className={clsx("content-wrapper absolute inset-0 overflow-hidden")}
        >
          <div
            className={clsx(
              "background-image background-image--fade-out pointer-events-none absolute inset-0 hidden select-none",
              "lg:block"
            )}
          >
            <div className={clsx("content-wrapper relative h-full")}>
              <div className={clsx("absolute -top-24 bottom-0 right-0")}>
                {headerImage}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={clsx("content-wrapper")}>
        {caption && (
          <motion.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0 }}
          >
            <span
              className={clsx(
                "text-violet-600 mb-1 block text-lg font-extrabold capitalize leading-none",
                "md:mb-0 md:text-2xl",
                "dark:text-violet-400"
              )}
            >
              {caption}
            </span>
          </motion.div>
        )}
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          <h1
            className={clsx(
              "text-[2.5rem] font-extrabold leading-tight text-slate-700",
              "md:text-7xl md:leading-snug",
              "dark:text-slate-300"
            )}
          >
            {title}
          </h1>
        </motion.div>
        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          <p
            className={clsx(
              "mt-4 text-lg text-slate-600",
              "md:mt-6 md:text-2xl lg:max-w-[500px] xl:max-w-[700px]",
              "dark:text-slate-400"
            )}
          >
            {description}
          </p>
        </motion.div>
      </div>
    </header>
  );
}

export default PageHeader;
