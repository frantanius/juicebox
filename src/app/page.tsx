"use client";

import { useFormStore } from "@/store/formStore";
import HomeStep from "@/components/steps/HomeStep";
import WalkthroughStep from "@/components/steps/WalkthroughStep";
import FormStep from "@/components/steps/FormStep";
// import ResultStep from "@/components/steps/ResultStep";

export default function HomePage() {
  const { step } = useFormStore();

  return (
    <main>
      {step === 0 && <HomeStep />}
      {step === 1 && <WalkthroughStep />}
      {step === 2 && <FormStep />}
      {/* {step === 3 && <ResultStep />} */}
    </main>
  );
}
