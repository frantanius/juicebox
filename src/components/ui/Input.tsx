import * as React from "react";
import Button from "@/components/ui/Button";
import styles from "./Input.module.css";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  onIconClick?: () => void;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, onIconClick, className = "", type = "text", ...props }, ref) => {
    return (
      <div className={`${styles.wrapper} ${className}`}>
        <input ref={ref} type={type} className={styles.input} {...props} />
        {icon && (
          <Button
            variant="ghost"
            size="icon"
            type="submit"
            onClick={onIconClick}
            className={styles.iconButton}
            aria-label="Input icon"
          >
            {icon}
          </Button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
