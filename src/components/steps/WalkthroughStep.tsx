"use client";

import { useFormStore } from "@/store/formStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Button from "@/components/ui/Button";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./WalkthroughStep.module.css";

export default function WalkthroughStep() {
  const { setStep } = useFormStore();

  return (
    <section className={styles.wrapper}>
      <Swiper pagination modules={[Pagination]} className={styles.swiper}>
        <SwiperSlide className={styles.slide}>Slide 1: Welcome</SwiperSlide>
        <SwiperSlide className={styles.slide}>
          Slide 2: Instructions
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          Final Slide
          <Button
            onClick={() => setStep(2)}
            variant="secondary"
            aria-label="Start form"
          >
            Get Started
          </Button>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
