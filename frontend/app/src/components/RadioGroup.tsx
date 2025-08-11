import React from "react";
import Radio from "./RadioButton";
import styled from "styled-components";

type RadioOption = {
  label: string;
  value: string;
  state?: "idle" | "checked" | "disabled";
};

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  mode?: "light" | "dark";
}

const GroupWrapper = styled.div<{ mode: "light" | "dark" }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  background: ${({ mode, theme }) =>
    mode === "dark" ? theme.colors.dark : theme.colors.background};
  border: 1.5px dashed ${({ theme }) => theme.colors.border};
`;

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  mode = "light",
}) => (
  <GroupWrapper mode={mode}>
    {options.map((option) => (
      <Radio
        key={option.value}
        name={name}
        label={option.label}
        mode={mode}
        state={
          option.state === "disabled"
            ? "disabled"
            : value === option.value
            ? "checked"
            : "idle"
        }
        checked={value === option.value}
        disabled={option.state === "disabled"}
        onChange={() => onChange(option.value)}
      />
    ))}
  </GroupWrapper>
);

export { RadioGroup };