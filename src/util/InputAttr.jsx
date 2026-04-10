import { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../components/auth/PasswordIcon";

export default function InputAttr(
  name,
  errors,
  label,
  placeholder,
  type,
  labelPlacement = "outside-top",
  variant = "flat",
  radius = "sm",
  color = "default",
  size = "md",
  classNames,
) {
  classNames = {
    base: "min-h-24 max-h-26",
    label: "text-black dark:text-white/90 font-bold ",
    input: ["placeholder:text-black/60 dark:placeholder:text-white/60"],
    innerWrapper: ["bg-transparent"],
    inputWrapper: [
      "border border-gray-200 dark:border-white/10",
      "!bg-white dark:!bg-white/5",
      "focus-within:ring-3 focus-within:ring-gray-300 focus-within:bg-transparent focus-within:border-gray-400 dark:focus-within:border-gray-100/40 dark:focus-within:ring-gray-300/20",
    ],
  };
  if (type == "date") {
    classNames = {
      label: "text-black dark:text-white/90 text-normal font-bold",
      calendarContent: "bg-surface",
      selectorIcon: "text-primary",
      inputWrapper: [
        "border border-gray-200 dark:border-white/10 ",
        "!bg-white dark:!bg-white/5",
        "focus-within:ring-3 focus-within:ring-gray-300 focus-within:bg-transparent focus-within:border-gray-400 dark:focus-within:border-gray-100/40 dark:focus-within:ring-gray-300/20",
      ],
    };
  }
  if (name == "gender") {
    classNames = {
      base: "min-h-24 max-h-24",
      label: "text-black dark:text-white/90 text-normal font-bold",
      selectorIcon: "text-primary",
      popoverContent: "bg-surface",
      trigger: [
        "border border-gray-200 dark:border-white/10",
        "!bg-white dark:!bg-white/5",
        "focus-within:ring-3 focus-within:ring-gray-300 focus-within:bg-transparent focus-within:border-gray-400 dark:focus-within:border-gray-100/40 dark:focus-within:ring-gray-300/20",
      ],
    };
  }
  if (type == "checkbox") {
    classNames = {
      label: "text-primary/70 font-normal",
      wrapper: " shadow-xs",
      icon: "size-2.5",
    };
  }

    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

    const  endContent=()=>{
      return    <button
          aria-label="toggle password visibility"
          className="focus:outline-solid outline-transparent"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon  />
          ) : (
            <EyeFilledIcon  />
          )}
        </button>
      }


  return {
    isInvalid: !!errors[name],
    errorMessage: errors[name]?.message,
    labelPlacement,
    variant,
    radius,
    label,
    type:type=="password"?(isVisible? 'text': "password"):type,
    placeholder,
    color,
    size,
    isRequired: false,
    defaultSelected: type == "checkbox" ? true : undefined,
    classNames,
    endContent:type=='password'?endContent():''
  };
}
