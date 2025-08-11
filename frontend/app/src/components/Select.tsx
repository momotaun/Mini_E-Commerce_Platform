import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaChevronDown, FaCheck, FaLock } from "react-icons/fa";

type SelectMode = "light" | "dark";
type SelectState = "idle" | "focus" | "error" | "disabled" | "success";
type OptionState = "idle" | "hovered" | "disabled";

interface SelectOption {
  label: string;
  value: string;
  state?: OptionState;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface SelectInputProps {
  options: SelectOption[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  mode?: SelectMode;
  state?: SelectState;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  successIcon?: React.ReactNode;
  errorIcon?: React.ReactNode;
}

const sizeMap = {
  sm: {
    height: "32px",
    fontSize: "0.875rem",
    padding: "0 12px",
    dropdownFont: "0.875rem",
  },
  md: {
    height: "40px",
    fontSize: "1rem",
    padding: "0 16px",
    dropdownFont: "1rem",
  },
  lg: {
    height: "48px",
    fontSize: "1.125rem",
    padding: "0 20px",
    dropdownFont: "1.125rem",
  },
};

const getBorderColor = (theme: any, state: SelectState, mode: SelectMode) => {
  if (state === "error") return theme.colors.warning;
  if (state === "success") return theme.colors.success;
  if (state === "focus") return theme.colors.primary;
  if (mode === "dark") return theme.colors.border;
  return theme.colors.border;
};

const getBgColor = (theme: any, mode: SelectMode, state: SelectState) => {
  if (state === "disabled") return theme.colors.button.disabled;
  if (mode === "dark") return theme.colors.dark;
  return theme.colors.background;
};

const SelectWrapper = styled.div<{ mode: SelectMode; state: SelectState; size: keyof typeof sizeMap; disabled?: boolean }>`
  position: relative;
  width: 100%;
  min-width: 160px;
  font-size: ${({ size }) => sizeMap[size].fontSize};
  border-radius: 8px;
  border: 1.5px solid
    ${({ theme, state, mode }) => getBorderColor(theme, state, mode)};
  background: ${({ theme, mode, state }) => getBgColor(theme, mode, state)};
  height: ${({ size }) => sizeMap[size].height};
  display: flex;
  align-items: center;
  transition: border 0.2s, background 0.2s;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

const SelectButton = styled.button<{ size: keyof typeof sizeMap; state: SelectState; mode: SelectMode; disabled?: boolean }>`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  padding: ${({ size }) => sizeMap[size].padding};
  font-size: ${({ size }) => sizeMap[size].fontSize};
  color: ${({ theme, mode, state }) =>
    state === "disabled"
      ? theme.colors.button.disabledText
      : mode === "dark"
      ? "#fff"
      : theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  gap: 8px;
`;

const Placeholder = styled.span<{ state: SelectState }>`
  color: ${({ theme, state }) =>
    state === "disabled"
      ? theme.colors.button.disabledText
      : state === "error"
      ? theme.colors.warning
      : theme.colors.textLight};
`;

const Dropdown = styled.ul<{ open: boolean; mode: SelectMode; size: keyof typeof sizeMap }>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 4px);
  z-index: 10;
  background: ${({ theme, mode }) =>
    mode === "dark" ? theme.colors.secondary : theme.colors.backgroundAlt};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  box-shadow: 0 4px 24px 0 rgba(60,72,88,0.10);
  margin: 0;
  padding: 8px 0;
  list-style: none;
  font-size: ${({ size }) => sizeMap[size].dropdownFont};
`;

const OptionItem = styled.li<{
  selected: boolean;
  hovered: boolean;
  disabled?: boolean;
  mode: SelectMode;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ theme, selected, disabled, mode }) =>
    disabled
      ? theme.colors.button.disabledText
      : selected
      ? theme.colors.primary
      : mode === "dark"
      ? "#fff"
      : theme.colors.text};
  background: ${({ selected, hovered, theme }) =>
    selected
      ? theme.colors.muted
      : hovered
      ? theme.colors.backgroundAlt
      : "transparent"};
  font-weight: ${({ selected }) => (selected ? 600 : 400)};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  border-radius: 4px;

  &:hover {
    background: ${({ theme, disabled }) =>
      !disabled ? theme.colors.backgroundAlt : "transparent"};
  }
`;

const IconRight = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const OptionIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 1em;
`;

export const Select: React.FC<SelectInputProps> = ({
  options,
  value,
  onChange,
  placeholder = "Placeholder",
  mode = "light",
  state = "idle",
  size = "md",
  disabled = false,
  successIcon,
  errorIcon,
}) => {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <SelectWrapper
      ref={ref}
      mode={mode}
      state={state}
      size={size}
      disabled={disabled || state === "disabled"}
      tabIndex={-1}
    >
      <SelectButton
        size={size}
        state={state}
        mode={mode}
        disabled={disabled || state === "disabled"}
        type="button"
        onClick={() => !disabled && state !== "disabled" && setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selectedOption ? (
          <>
            {selectedOption.icon && <OptionIcon>{selectedOption.icon}</OptionIcon>}
            <span>{selectedOption.label}</span>
            {state === "success" && (successIcon || <FaCheck color="#42d697" />)}
            {state === "error" && (errorIcon || <FaCheck color="#fe696a" />)}
          </>
        ) : (
          <Placeholder state={state}>{placeholder}</Placeholder>
        )}
        <IconRight>
          {state === "disabled" && <FaLock style={{ opacity: 0.7 }} />}
          {state === "success" && (successIcon || <FaCheck color="#42d697" />)}
          {state === "error" && (errorIcon || <FaCheck color="#fe696a" />)}
          <FaChevronDown style={{ marginLeft: 8 }} />
        </IconRight>
      </SelectButton>
      <Dropdown open={open} mode={mode} size={size} role="listbox">
        {options.map((option, idx) => (
          <OptionItem
            key={option.value}
            selected={option.value === value}
            hovered={hoveredIndex === idx}
            disabled={option.disabled || option.state === "disabled"}
            mode={mode}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              if (!option.disabled && option.state !== "disabled") {
                onChange(option.value);
                setOpen(false);
              }
            }}
            aria-selected={option.value === value}
            aria-disabled={option.disabled || option.state === "disabled"}
            tabIndex={-1}
          >
            {option.icon && <OptionIcon>{option.icon}</OptionIcon>}
            <span>{option.label}</span>
            {option.value === value && <FaCheck color="#42d697" style={{ marginLeft: "auto" }} />}
            {option.state === "disabled" && <FaLock style={{ marginLeft: "auto", opacity: 0.7 }} />}
          </OptionItem>
        ))}
      </Dropdown>
    </SelectWrapper>
  );
};

export default Select;