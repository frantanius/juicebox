"use client";

// import { useRef } from "react";
import { useFormStore } from "@/store/formStore";
// import LottieFadeIn from "@/components/LottieFadeIn";
import Button from "@/components/ui/Button";
// import animationData from "@/assets/lottie/home.json";
import styles from "./HomeStep.module.css";

export default function HomeStep() {
  // const lottieRef = useRef(null);
  const { setStep } = useFormStore();

  return (
    <section className={styles.wrapper}>
      {/* <LottieFadeIn ref={lottieRef} animationData={animationData} className={styles.lottie} /> */}

      <Button onClick={() => setStep(1)} fullWidth>
        Get a reality check
      </Button>
    </section>
  );
}
