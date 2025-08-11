import React from "react";
import styled, { css } from "styled-components";

type ButtonType = "primary" | "info" | "success" | "warning" | "secondary" | "dark";
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "solid" | "outline";
type IconPosition = "left" | "right";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeStyle?: ButtonType;
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  children?: React.ReactNode;
}

const sizeMap = {
  sm: {
    fontSize: "0.875rem",
    padding: "0 16px",
    height: "32px",
    iconOnly: "32px",
  },
  md: {
    fontSize: "1rem",
    padding: "0 24px",
    height: "40px",
    iconOnly: "40px",
  },
  lg: {
    fontSize: "1.125rem",
    padding: "0 32px",
    height: "48px",
    iconOnly: "48px",
  },
};

const solidStyles = css<ButtonProps>`
  background: ${({ theme, typeStyle = "primary" }) => theme.colors.button[typeStyle]};
  color: ${({ theme, typeStyle = "primary" }) => theme.colors.button[`${typeStyle}Text`]};
  border: none;

  &:hover:not(:disabled) {
    filter: brightness(0.95);
  }
  &:active:not(:disabled) {
    filter: brightness(0.90);
  }
`;

const outlineStyles = css<ButtonProps>`
  background: transparent;
  color: ${({ theme, typeStyle = "primary" }) => theme.colors.button[typeStyle]};
  border: 2px solid ${({ theme, typeStyle = "primary" }) => theme.colors.button[typeStyle]};

  &:hover:not(:disabled) {
    background: ${({ theme, typeStyle = "primary" }) => theme.colors.button[typeStyle]};
    color: ${({ theme, typeStyle = "primary" }) => theme.colors.button[`${typeStyle}Text`]};
    filter: none;
  }
  &:active:not(:disabled) {
    filter: brightness(0.95);
  }
`;

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.buttons.fontWeight};
  border-radius: ${({ theme }) => theme.buttons.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.button};
  cursor: pointer;
  transition: background 0.2s, color 0.2s, filter 0.2s;
  outline: none;
  gap: ${({ icon }) => (icon ? "8px" : "0")};

  font-size: ${({ size = "md" }) => sizeMap[size].fontSize};
  height: ${({ size = "md" }) => sizeMap[size].height};
  padding: ${({ size = "md" }) => sizeMap[size].padding};

  ${({ variant = "solid" }) => (variant === "solid" ? solidStyles : outlineStyles)}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.button.disabled};
      color: ${theme.colors.button.disabledText};
      border: none;
      cursor: not-allowed;
      box-shadow: none;
      filter: none;
    `}

  ${({ children, size = "md" }) =>
    !children &&
    css`
      width: ${sizeMap[size].iconOnly};
      padding: 0;
    `}
`;

export const Button: React.FC<ButtonProps> = ({
  typeStyle = "primary",
  size = "md",
  variant = "solid",
  icon,
  iconPosition = "left",
  children,
  ...rest
}) => (
  <StyledButton
    typeStyle={typeStyle}
    size={size}
    variant={variant}
    icon={icon}
    {...rest}
  >
    {icon && iconPosition === "left" && icon}
    {children}
    {icon && iconPosition === "right" && icon}
  </StyledButton>
);