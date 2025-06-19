"use client";

import Image from "next/image";
import { useFormStore } from "@/store/formStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form";
// import styles from "./FormStep.module.css";

const formSchema = z.object({
  firstName: z.string().min(3, "Required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function FormStep() {
  const { setStep, setFormData } = useFormStore();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setFormData(data);
    setStep(3);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="firstName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="First name"
                  icon={
                    <Image
                      aria-hidden
                      alt="arrow up"
                      src="/icons/arrow-up.svg"
                      width={18}
                      height={18}
                    />
                  }
                  onIconClick={() => alert("Icon diklik")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
