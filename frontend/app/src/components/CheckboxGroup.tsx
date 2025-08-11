import React from "react";
import Checkbox from "./Checkbox";
import styled from "styled-components";

type CheckboxOption = {
  label: string;
  value: string;
  state?: "idle" | "checked" | "disabled";
};

interface CheckboxGroupProps {
  name: string;
  options: CheckboxOption[];
  values: string[];
  onChange: (values: string[]) => void;
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

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  options,
  values,
  onChange,
  mode = "light",
}) => {
  const handleChange = (optionValue: string) => {
    if (values.includes(optionValue)) {
      onChange(values.filter((v) => v !== optionValue));
    } else {
      onChange([...values, optionValue]);
    }
  };

  return (
    <GroupWrapper mode={mode}>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          name={name}
          label={option.label}
          mode={mode}
          state={
            option.state === "disabled"
              ? "disabled"
              : values.includes(option.value)
              ? "checked"
              : "idle"
          }
          disabled={option.state === "disabled"}
          onChange={() => handleChange(option.value)}
        />
      ))}
    </GroupWrapper>
  );
};

export { CheckboxGroup };