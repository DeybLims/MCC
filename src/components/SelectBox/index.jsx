import React, { useState } from "react";
import PropTypes from "prop-types";

const variants = {
  outline: { amber_400: "border-amber-400 border-[1px] border-solid text-amber-400" }
};

const shapes = {
  round: "rounded-[12px]",
  square: "rounded-[6px]"
};

const SelectBox = ({
  children,
  placeholder = "Select",
  className = "",
  options = [],
  isSearchable = false,
  placeholderClassName = "",
  isMulti = false,
  onChange,
  value = "",
  shape = "",
  variant = "outline",
  color = "amber_400",
  size = "",
  indicator,
  ...restProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(value ? [value] : []);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    if (isMulti) {
      const selectedIndex = selectedOptions.findIndex((item) => item.value === option.value);
      let newSelectedOptions = [...selectedOptions];
      
      if (selectedIndex >= 0) {
        newSelectedOptions.splice(selectedIndex, 1);
      } else {
        newSelectedOptions.push(option);
      }
      
      setSelectedOptions(newSelectedOptions);
      
      if (onChange) onChange(newSelectedOptions);
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
      
      if (onChange) onChange(option);
    }
  };

  const selectedText = () => {
    if (selectedOptions.length > 0) {
      if (isMulti) {
        return selectedOptions.map((option) => option.label).join(", ");
      }
      return selectedOptions[0].label;
    }
    return placeholder;
  };

  return (
    <div className={`relative ${className}`} {...restProps}>
      <div 
        className={`flex items-center justify-between cursor-pointer p-3 ${
          shape && shapes[shape]
        } ${variant && variants[variant]?.[color]}`}
        onClick={handleClick}
      >
        <span className={`${selectedOptions.length ? "" : placeholderClassName}`}>
          {selectedText()}
        </span>
        {indicator || (
          <span className={`ml-2 ${isOpen ? "rotate-180" : ""} transition-transform duration-300`}>
            ▼
          </span>
        )}
      </div>
      
      {isOpen && (
        <div className="absolute w-full mt-1 z-10 bg-gray-900 border border-amber-400 rounded-[6px] max-h-[300px] overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className={`p-3 cursor-pointer hover:bg-gray-800 ${
                selectedOptions.some((item) => item.value === option.value) ? "bg-gray-800" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  placeholder: PropTypes.string,
  placeholderClassName: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf(["round", "square"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["amber_400"]),
  indicator: PropTypes.node
};

export { SelectBox };
