/**
 * A reusable dropdown component that allows users to select an option from a list.
 *
 * @param options - An array of string options to display in the dropdown.
 * @param label - The default label to display in the dropdown when no option is selected.
 * @param onSelect - A callback function that is called when an option is selected, passing the selected option as a parameter.
 * @param resetSelected - An optional string that, if provided, will be used to reset the selected option.
 */

import React, { useEffect, useRef, useState } from "react";
import style from "@/styles/dropdown.module.css";

interface DropdownProps {
  options: string[];
  label: string;
  onSelect: (selected: string) => void;
  resetSelected: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  resetSelected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  useEffect(() => {
    setSelected(resetSelected ? resetSelected : label);
  }, [resetSelected]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.dropdown} ref={dropdownRef}>
      <div className={style.dropdown_header} onClick={toggleDropdown}>
        <span className={selected !== label ? style.selected_text : ""}>
          {selected}
        </span>
        <span className={`arrow ${isOpen ? "open" : ""}`}></span>
        <link rel="preload" as="image" href="/assets/images/dropdown.svg" />
        <img
          height={8}
          width={16}
          src="/assets/images/dropdown.svg"
          alt="dropdown"
          className={`${style.dropdown_icon} ${isOpen ? style.open : ""}`}
        />
      </div>
      {isOpen && (
        <ul className={style.dropdown_list}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
