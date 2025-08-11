import React from "react";
import styled, { css } from "styled-components";

type SwitchState = "idle" | "checked" | "disabled";
type SwitchMode = "light" | "dark";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: SwitchState;
  mode?: SwitchMode;
  label?: string;
}

const SwitchWrapper = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  gap: 8px;
`;

const StyledSwitch = styled.input<{ state: SwitchState; mode: SwitchMode }>`
  appearance: none;
  width: 40px;
  height: 20px;
  border-radius: 999px;
  background: ${({ theme, state, mode }) =>
    state === "checked"
      ? theme.colors.success
      : mode === "dark"
      ? theme.colors.secondary
      : theme.colors.button.disabled};
  position: relative;
  outline: none;
  transition: background 0.2s;
  cursor: ${({ state }) => (state === "disabled" ? "not-allowed" : "pointer")};

  &:before {
    content: "";
    position: absolute;
    left: 3px;
    top: 3px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    transition: transform 0.2s;
    transform: ${({ state }) =>
      state === "checked" ? "translateX(20px)" : "translateX(0)"};
    box-shadow: 0 1px 3px rgba(60,72,88,0.10);
  }

  &:checked {
    background: ${({ theme }) => theme.colors.success};
  }

  &:checked:before {
    transform: translateX(20px);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.button.disabled};
    cursor: not-allowed;
  }
`;

const LabelText = styled.span<{ disabled?: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.button.disabledText : theme.colors.text};
  font-size: 1rem;
`;

export const Switch: React.FC<SwitchProps> = ({
  state = "idle",
  mode = "light",
  label,
  disabled,
  ...rest
}) => (
  <SwitchWrapper disabled={disabled}>
    <StyledSwitch
      type="checkbox"
      state={state}
      mode={mode}
      checked={state === "checked"}
      disabled={state === "disabled" || disabled}
      {...rest}
    />
    {label && <LabelText disabled={state === "disabled" || disabled}>{label}</LabelText>}
  </SwitchWrapper>
);

export default Switch;