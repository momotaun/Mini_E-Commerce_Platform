import React from "react";
import styled, { css } from "styled-components";

type QuantityInputMode = "light" | "dark";
type QuantityInputState = "idle" | "disabled";

interface QuantityInputProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  mode?: QuantityInputMode;
  state?: QuantityInputState;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: {
    height: "32px",
    fontSize: "0.875rem",
    width: "40px",
    buttonWidth: "32px",
  },
  md: {
    height: "40px",
    fontSize: "1rem",
    width: "48px",
    buttonWidth: "40px",
  },
  lg: {
    height: "48px",
    fontSize: "1.125rem",
    width: "56px",
    buttonWidth: "48px",
  },
};

const Wrapper = styled.div<{ mode: QuantityInputMode; size: keyof typeof sizeMap }>`
  display: inline-flex;
  align-items: stretch;
  border-radius: 8px;
  overflow: hidden;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  background: ${({ mode, theme }) =>
    mode === "dark" ? theme.colors.dark : theme.colors.background};
`;

const Button = styled.button<{
  mode: QuantityInputMode;
  state: QuantityInputState;
  size: keyof typeof sizeMap;
  position: "left" | "right";
}>`
  width: ${({ size }) => sizeMap[size].buttonWidth};
  height: ${({ size }) => sizeMap[size].height};
  font-size: ${({ size }) => sizeMap[size].fontSize};
  font-weight: 600;
  border: none;
  background: ${({ mode, state, theme }) =>
    state === "disabled"
      ? theme.colors.button.disabled
      : mode === "dark"
      ? theme.colors.secondary
      : theme.colors.backgroundAlt};
  color: ${({ mode, state, theme }) =>
    state === "disabled"
      ? theme.colors.button.disabledText
      : mode === "dark"
      ? "#fff"
      : theme.colors.text};
  cursor: ${({ state }) => (state === "disabled" ? "not-allowed" : "pointer")};
  transition: background 0.2s, color 0.2s;
  ${({ position }) =>
    position === "left"
      ? "border-right: 1.5px solid #3c4858;"
      : "border-left: 1.5px solid #3c4858;"}
  ${({ mode }) =>
    mode === "dark" &&
    css`
      border-color: #4b566b;
    `}
`;

const ValueBox = styled.div<{ mode: QuantityInputMode; size: keyof typeof sizeMap; state: QuantityInputState }>`
  min-width: ${({ size }) => sizeMap[size].width};
  height: ${({ size }) => sizeMap[size].height};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => sizeMap[size].fontSize};
  font-weight: 600;
  color: ${({ mode, state, theme }) =>
    state === "disabled"
      ? theme.colors.button.disabledText
      : mode === "dark"
      ? "#fff"
      : theme.colors.text};
  background: transparent;
  border: none;
  outline: none;
  user-select: none;
`;

export const QuantityInput: React.FC<QuantityInputProps> = ({
  value,
  min = 1,
  max = 99,
  onChange,
  mode = "light",
  state = "idle",
  size = "md",
}) => {
  const isDecrementDisabled = state === "disabled" || value <= min;
  const isIncrementDisabled = state === "disabled" || value >= max;

  return (
    <Wrapper mode={mode} size={size}>
      <Button
        mode={mode}
        state={isDecrementDisabled ? "disabled" : "idle"}
        size={size}
        position="left"
        onClick={() => !isDecrementDisabled && onChange(value - 1)}
        disabled={isDecrementDisabled}
        aria-label="Decrease"
        type="button"
      >
        –
      </Button>
      <ValueBox mode={mode} size={size} state={state}>
        {value}
      </ValueBox>
      <Button
        mode={mode}
        state={isIncrementDisabled ? "disabled" : "idle"}
        size={size}
        position="right"
        onClick={() => !isIncrementDisabled && onChange(value + 1)}
        disabled={isIncrementDisabled}
        aria-label="Increase"
        type="button"
      >
        +
      </Button>
    </Wrapper>
  );
};

export default QuantityInput;