"use client";

import { useRouter } from "next/navigation";
import { useFormStore } from "@/store/formStore";
import styles from "./Header.module.css";
import Image from "next/image";
import Button from "../ui/Button";

export default function Header() {
  const { step, setStep, reset } = useFormStore();
  const router = useRouter();

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleRefresh = () => {
    reset();
    router.push("/");
  };

  return (
    <header className={styles.header}>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleBack}
        aria-label="Back"
        className={styles.icon}
      >
        <Image src="/icons/arrow-left.svg" alt="Back" width={24} height={24} />
      </Button>
      <div className={styles.logo}>Juicebox</div>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleRefresh}
        aria-label="Refresh"
        className={styles.icon}
      >
        <Image src="/icons/refresh.svg" alt="Refresh" width={24} height={24} />
      </Button>
    </header>
  );
}
