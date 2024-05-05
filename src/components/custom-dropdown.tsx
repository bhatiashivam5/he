import Select from "react-select";
import { CustomDropdownProps, DropdownOptions } from "./";

function CustomDropdown({
    options,
    isMulti,
    closeMenuOnSelect,
    isDisabled,
    placeholder,
    isLoading,
    onChange,
    isClearable,
    isSearchable,
    defaultValue,
    className
}: CustomDropdownProps) {
    return (
        <Select
            onChange={onChange}
            placeholder={placeholder}
            backspaceRemovesValue
            defaultValue={defaultValue}
            isLoading={isLoading}
            closeMenuOnSelect={closeMenuOnSelect}
            isMulti={isMulti}
            options={options}
            isDisabled={isDisabled}
            className=""
            isClearable={isClearable}
            isSearchable={isSearchable}
        />
    );
}

export default CustomDropdown;
