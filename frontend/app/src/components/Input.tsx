import React from "react";
import styled, { css } from "styled-components";

type InputSize = "sm" | "md" | "lg";
type IconPosition = "left" | "right";
type InputState = "idle" | "focus" | "error" | "disabled";
type InputMode = "light" | "dark";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: InputSize;
  value?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  state?: InputState;
  mode?: InputMode;
}

const sizeMap = {
  sm: {
    fontSize: "0.875rem",
    height: "32px",
    padding: "0 12px",
    iconPadding: "32px",
  },
  md: {
    fontSize: "1rem",
    height: "40px",
    padding: "0 16px",
    iconPadding: "40px",
  },
  lg: {
    fontSize: "1.125rem",
    height: "48px",
    padding: "0 20px",
    iconPadding: "48px",
  },
};

const stateStyles = {
  idle: css`
    border: 1.5px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme, mode }) =>
      mode === "dark" ? theme.colors.dark : theme.colors.background};
    color: ${({ theme, mode }) =>
      mode === "dark" ? theme.colors.background : theme.colors.text};
  `,
  focus: css`
    border: 1.5px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}22;
  `,
  error: css`
    border: 1.5px solid ${({ theme }) => theme.colors.warning};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.warning}22;
  `,
  disabled: css`
    border: 1.5px solid ${({ theme }) => theme.colors.button.disabled};
    background: ${({ theme }) => theme.colors.button.disabled};
    color: ${({ theme }) => theme.colors.button.disabledText};
    cursor: not-allowed;
  `,
};

const InputWrapper = styled.div<{ size: InputSize }>`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: ${({ size }) => sizeMap[size].height};
`;

const StyledInput = styled.input<{
  size: InputSize;
  icon: React.ReactNode;
  iconPosition: IconPosition;
  state: InputState;
  mode: InputMode;
}>`
  width: 100%;
  font-size: ${({ size }) => sizeMap[size].fontSize};
  height: ${({ size }) => sizeMap[size].height};
  padding: ${({ size, icon, iconPosition }) =>
    icon
      ? iconPosition === "left"
        ? `0 16px 0 ${sizeMap[size].iconPadding}`
        : `0 ${sizeMap[size].iconPadding} 0 16px`
      : sizeMap[size].padding};
  border-radius: 8px;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;

  ${({ state }) => stateStyles[state]}

  &:focus {
    ${({ state }) => state === "focus" && stateStyles.focus}
  }
  &:disabled {
    ${({ state }) => state === "disabled" && stateStyles.disabled}
  }
`;

const IconWrapper = styled.span<{
  size: InputSize;
  iconPosition: IconPosition;
}>`
  position: absolute;
  top: 0;
  ${({ iconPosition, size }) =>
    iconPosition === "left"
      ? `left: 8px;`
      : `right: 8px;`}
  height: ${({ size }) => sizeMap[size].height};
  display: flex;
  align-items: center;
  pointer-events: none;
  color: #b0b7c3;
  font-size: 1.2em;
`;

export const Input: React.FC<InputProps> = ({
  size = "md",
  value,
  placeholder,
  icon,
  iconPosition = "left",
  state = "idle",
  mode = "light",
  ...rest
}) => (
  <InputWrapper size={size}>
    {icon && iconPosition === "left" && (
      <IconWrapper size={size} iconPosition="left">
        {icon}
      </IconWrapper>
    )}
    <StyledInput
      size={size}
      icon={icon}
      iconPosition={iconPosition}
      state={state}
      mode={mode}
      value={value}
      placeholder={placeholder}
      disabled={state === "disabled"}
      {...rest}
    />
    {icon && iconPosition === "right" && (
      <IconWrapper size={size} iconPosition="right">
        {icon}
      </IconWrapper>
    )}
  </InputWrapper>
);