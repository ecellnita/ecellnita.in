"use client";

import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import { cn } from "~/lib/utils";

interface TabItem {
  id: string;
  title: string;
  icon?: LucideIcon;
  cardContent?: React.ReactNode;
  color?: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    position: "absolute" as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "absolute" as const,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    position: "absolute" as const,
  }),
};

const transition = {
  duration: 0.35,
  ease: [0.32, 0.72, 0, 1],
};

export default function SmoothTab({
  items,
  defaultTabId,
  className,
  activeColor = "bg-[#1F9CFE]",
  onChange,
}: {
  items: TabItem[];
  defaultTabId?: string;
  className?: string;
  activeColor?: string;
  onChange?: (id: string) => void;
}) {
  const initialTabId = defaultTabId ?? items[0]?.id;

  const [selected, setSelected] = React.useState(initialTabId);
  const [direction, setDirection] = React.useState(0);
  const [dimensions, setDimensions] = React.useState({ width: 0, left: 0 });

  const buttonRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const update = () => {
      const btn = buttonRefs.current.get(selected);
      const container = containerRef.current;

      if (!btn || !container) return;

      const rect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setDimensions({
        width: rect.width,
        left: rect.left - containerRect.left,
      });
    };

    requestAnimationFrame(update);
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, [selected]);

  const handleClick = (tabId: string) => {
    const currentIndex = items.findIndex((i) => i.id === selected);
    const newIndex = items.findIndex((i) => i.id === tabId);

    setDirection(newIndex > currentIndex ? 1 : -1);
    setSelected(tabId);
    onChange?.(tabId);
  };

  const selectedItem = items.find((i) => i.id === selected);

  return (
    <div className="flex flex-col gap-6 w-full items-center">
      {/* Tabs */}
      <div
        ref={containerRef}
        role="tablist"
        className={cn(
          "relative flex items-center gap-1",
          "mx-auto px-1 py-1",
          "bg-background border rounded-xl",
          "w-fit",
          className
        )}
      >
        {/* Sliding indicator */}
        <motion.div
          animate={{
            width: dimensions.width,
            x: dimensions.left,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          className={cn(
            "absolute top-1 bottom-1 rounded-lg",
            selectedItem?.color || activeColor
          )}
        />

        {items.map((item) => {
          const isSelected = selected === item.id;

          return (
            <button
              key={item.id}
              ref={(el) => {
                if (el) buttonRefs.current.set(item.id, el);
              }}
              onClick={() => handleClick(item.id)}
              className={cn(
                "relative z-10 px-4 py-2 text-sm font-medium rounded-lg",
                "transition-colors duration-200 whitespace-nowrap",
                isSelected
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      {/* Card */}
      <div className="relative w-full max-w-4xl">
        <div className="relative h-[200px] w-full rounded-xl border bg-card overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={selected}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="absolute inset-0 p-6"
            >
              {selectedItem?.cardContent}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}