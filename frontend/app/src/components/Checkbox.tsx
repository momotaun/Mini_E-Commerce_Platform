import React from "react";
import styled, { css } from "styled-components";

type CheckboxState = "idle" | "checked" | "disabled";
type CheckboxMode = "light" | "dark";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: CheckboxState;
  mode?: CheckboxMode;
  label?: string;
}

const CheckboxWrapper = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  gap: 8px;
`;

const StyledCheckbox = styled.input<{ state: CheckboxState; mode: CheckboxMode }>`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 2px solid
    ${({ theme, state, mode }) =>
      state === "disabled"
        ? theme.colors.button.disabled
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
    position: absolute;
    left: 5px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: solid ${({ theme, mode }) =>
      mode === "dark" ? theme.colors.background : "#fff"};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
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

export const Checkbox: React.FC<CheckboxProps> = ({
  state = "idle",
  mode = "light",
  label,
  disabled,
  ...rest
}) => (
  <CheckboxWrapper disabled={disabled}>
    <StyledCheckbox
      type="checkbox"
      state={state}
      mode={mode}
      disabled={state === "disabled" || disabled}
      checked={state === "checked"}
      {...rest}
    />
    {label && <LabelText disabled={state === "disabled" || disabled}>{label}</LabelText>}
  </CheckboxWrapper>
);

export default Checkbox;