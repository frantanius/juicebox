import { StateCreator, create } from "zustand";

interface FormData {
  firstName: string;
  email: string;
}

interface FormState {
  step: number;
  formData: FormData;
  setStep: (step: number) => void;
  setFormData: (data: Partial<FormData>) => void;
  reset: () => void;
}

const createFormStore: StateCreator<FormState> = (set) => ({
  step: 0,
  formData: {
    firstName: "",
    email: "",
  },
  setStep: (step) => set(() => ({ step })),
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  reset: () =>
    set(() => ({
      step: 0,
      formData: {
        firstName: "",
        email: "",
      },
    })),
});

export const useFormStore = create<FormState>(createFormStore);

// Debugging
useFormStore.subscribe((state) => {
  console.log("Zustand State Changed:", state);
});
