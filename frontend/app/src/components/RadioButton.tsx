import React from "react";
import styled, { css } from "styled-components";

type RadioState = "idle" | "checked" | "disabled";
type RadioMode = "light" | "dark";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: RadioState;
  mode?: RadioMode;
  label?: string;
}

const RadioWrapper = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  gap: 8px;
`;

const StyledRadio = styled.input<{ state: RadioState; mode: RadioMode }>`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid
    ${({ theme, state, mode }) =>
      state === "error"
        ? theme.colors.warning
        : mode === "dark"
        ? theme.colors.background
        : theme.colors.primary};
  background: ${({ theme, mode }) =>
    mode === "dark" ? theme.colors.dark : theme.colors.background};
  display: inline-block;
  position: relative;
  transition: border 0.2s, background 0.2s;

  &:checked {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:checked::after {
    content: "";
    display: block;
    margin: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme, mode }) =>
      mode === "dark" ? theme.colors.background : theme.colors.backgroundAlt};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.button.disabled};
    border-color: ${({ theme }) => theme.colors.button.disabled};
    cursor: not-allowed;
  }
`;

const LabelText = styled.span<{ disabled?: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.button.disabledText : theme.colors.text};
  font-size: 1rem;
`;

export const Radio: React.FC<RadioProps> = ({
  state = "idle",
  mode = "light",
  label,
  disabled,
  ...rest
}) => (
  <RadioWrapper disabled={disabled}>
    <StyledRadio
      type="radio"
      state={state}
      mode={mode}
      disabled={state === "disabled" || disabled}
      {...rest}
    />
    {label && <LabelText disabled={state === "disabled" || disabled}>{label}</LabelText>}
  </RadioWrapper>
);

export default Radio;