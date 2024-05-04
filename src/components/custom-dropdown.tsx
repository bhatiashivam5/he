import Select from "react-select";

function CustomDropdown({
    options,
    isMulti,
    closeMenuOnSelect,
    isDisabled,
    placeholder,
    isLoading,
    onChange,
    defaultValue,
    className,
    onBlur
}: CustomDropdownProps) {
    return (
        <Select
            // onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            backspaceRemovesValue
            value={defaultValue}
            isLoading={isLoading}
            closeMenuOnSelect={closeMenuOnSelect}
            isMulti={isMulti}
            options={options}
            isDisabled={isDisabled}
            className=""
        />
    );
}

export default CustomDropdown;
