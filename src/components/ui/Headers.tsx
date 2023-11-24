"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const headerVariants = cva("font-bold", {
  variants: {
    size: {
      sm: "text-base",
      default: "text-2xl",
      lg: "text-3xl",
      xl: "text-4xl tracking-wide",
      xxl: "text-5xl tracking-wide",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface HeadersProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headerVariants> {}

function Headers({
  className,
  size = "default",
  children,
  ...props
}: HeadersProps) {
  if (size === "xl" || size === "xxl")
    return (
      <h1 className={cn(headerVariants({ size }), className)}>{children}</h1>
    );

  if (size === "lg" || size === "default")
    return (
      <h2 className={cn(headerVariants({ size }), className)}>{children}</h2>
    );

  if (size === "sm")
    return (
      <h3 className={cn(headerVariants({ size }), className)}>{children}</h3>
    );
}

export default Headers;
