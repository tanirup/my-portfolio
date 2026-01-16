"use client";

import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ClassNameProps = { className?: string };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    asChild = false,
    className,
    disabled,
    type,
    children,
    ...props
  },
  ref
) {
  const base =
    "inline-flex items-center justify-center rounded-[10px] font-[650] " +
    "transition-transform transition-shadow transition-opacity duration-150 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#0a0a0a] text-white border border-black/20 " +
      "hover:translate-y-[-2px] hover:opacity-95 hover:shadow-[0_14px_34px_rgba(0,0,0,0.14)] " +
      "focus-visible:ring-black/50 ring-offset-white",
    secondary:
      "bg-white text-[#0a0a0a] border border-black/16 " +
      "hover:translate-y-[-2px] hover:border-black/35 hover:shadow-[0_10px_26px_rgba(0,0,0,0.10)] " +
      "focus-visible:ring-black/40 ring-offset-white",
    ghost:
      "bg-transparent text-[#0a0a0a] border border-transparent " +
      "hover:bg-black/5 focus-visible:ring-black/30 ring-offset-white",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "text-sm px-3 py-2",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-5 py-3",
  };

  const darkMode =
    "dark:ring-offset-black " +
    "dark:bg-white/90 dark:text-[#0a0a0a] " +
    "dark:border-white/40 dark:hover:shadow-[0_18px_46px_rgba(0,0,0,0.45)]";

  const cn = [base, variants[variant], sizes[size], darkMode, className]
    .filter(Boolean)
    .join(" ");

  // ✅ asChild（TSが className を渡せる型に絞る）
  if (asChild) {
    if (!React.isValidElement(children)) {
      if (process.env.NODE_ENV !== "production") {
        throw new Error("<Button asChild> requires a single React element child.");
      }
      return null;
    }

    // children の props に className がある前提の型に寄せる（これがts(2769)の解決）
    const child = children as React.ReactElement<ClassNameProps>;

    return React.cloneElement(child, {
      className: [cn, child.props.className].filter(Boolean).join(" "),
    });
  }

  return (
    <button
      ref={ref}
      className={cn}
      disabled={disabled}
      type={type ?? "button"}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
