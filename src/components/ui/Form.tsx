"use client";

import * as React from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { clsx } from "clsx";
import styles from "./form.module.css";

// ----------------- Contexts -----------------
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

// ----------------- Hooks -----------------
function useFormField() {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext || !itemContext) {
    throw new Error(
      "useFormField must be used inside <FormField> and <FormItem>"
    );
  }

  return {
    id: itemContext.id,
    name: fieldContext.name,
    formItemId: `${itemContext.id}-form-item`,
    formMessageId: `${itemContext.id}-form-item-message`,
    ...fieldState,
  };
}

// ----------------- Components -----------------
const Form = FormProvider;

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

function FormItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={clsx(styles.formItem, className)} {...props} />
    </FormItemContext.Provider>
  );
}

function FormControl<T extends HTMLElement>({
  children,
  className,
}: {
  children: React.ReactElement<React.HTMLAttributes<T>>;
  className?: string;
}) {
  const { error, formItemId, formMessageId } = useFormField();

  return React.cloneElement(children, {
    ...children.props,
    id: formItemId,
    className: clsx(styles.formControl, className, children.props.className),
    "aria-describedby": error ? formMessageId : undefined,
    "aria-invalid": !!error,
  });
}

function FormMessage({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { error, formMessageId } = useFormField();
  const message = error ? String(error.message) : children;

  if (!message) return null;

  return (
    <p
      id={formMessageId}
      className={clsx(styles.formMessage, className)}
      {...props}
    >
      {message}
    </p>
  );
}

// ----------------- Export -----------------
export { useFormField, Form, FormItem, FormControl, FormMessage, FormField };
