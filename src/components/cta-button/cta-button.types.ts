import { ButtonHTMLAttributes } from "react";

export interface CtaButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
