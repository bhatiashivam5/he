export type Option = {
  label: string | number;
  value: string | number;
};

export type DropdownOptions = Option[];

type CustomDropdownProps = {
  options: DropdownOptions;
  isMulti?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  closeMenuOnSelect?: boolean;
  placeholder?: string;
  defaultValue?: any;
  className?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  onChange?: (selectedOption: {
    label: string | undefined;
    value: string | undefined;
  }) => void;
};
