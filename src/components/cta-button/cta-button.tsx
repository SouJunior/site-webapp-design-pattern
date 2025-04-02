import { StyledButton, ArrowIcon } from "./cta-button.styles";
import type { CtaButtonProps } from "./cta-button.types";
import arrow1 from "../../assets/arrow1.png";

export const CtaButton = ({ label, ...props }: CtaButtonProps) => (
  <StyledButton {...props} aria-label={label}>
    {label}
    <ArrowIcon src={arrow1} alt="" aria-hidden="true" />
  </StyledButton>
);
