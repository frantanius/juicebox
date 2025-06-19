import * as React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

type Variant = "default" | "outline" | "secondary" | "ghost";
type Size = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const mergedClass = clsx(
      styles.button,
      styles[variant],
      styles[size === "default" ? "defaultSize" : size],
      fullWidth && styles.fullWidth,
      className
    );

    if (asChild && React.isValidElement(children)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const child = children as React.ReactElement<any, any>;
      return React.cloneElement(child, {
        ...props,
        className: clsx(child.props.className, mergedClass),
        ref,
      });
    }

    return (
      <button ref={ref} className={mergedClass} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
