"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const paragraphVariants = cva(" font-mono font-semibold", {
  variants: {
    variant: {
      default: "text-bold",
      thin: "font-thin ",
      uppercase: "uppercase",
    },
    size: {
      default: "text-base",
      xs: "text-xs",
      base: "text-base",
      lg: "text-lg",
    },
    tracking: {
      default: "tracking-widest",
      sm: "tracking-[0.2rem]",
      lg: "tracking-[0.35rem]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    tracking: "default",
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

export default function Paragraph({
  className,
  size,
  children,
  variant,
  tracking,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(paragraphVariants({ variant, tracking, size, className }))}
      {...props}
    >
      {children}
    </p>
  );
}
