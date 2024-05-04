type CustomDropdownProps = {
  options: DropdownOptions;
  isMulti?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  closeMenuOnSelect?: boolean;
  placeholder?: string;
  defaultValue?: unknown;
  className?: string;
  onChange?: (selectedOptions: {
    label?: string;
    value?: string | number;
    name?: string;
    id: string;
  }) => void;
  onBlur?: (value: unknown) => void;
};
