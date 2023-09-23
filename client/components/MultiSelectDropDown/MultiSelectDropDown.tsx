import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { MultiSelectProps } from "@/types/componentProps";
import styles from '../MultiSelectDropDown/MultiSelectDropDown.module.scss';

const MultiSelectDropDown = ({
  options,
  selectedOptions,
  setSelectedOptions,
  dropDownDisplayText,
}: MultiSelectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectedOptionsChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`${styles.dropdown} ${isDropdownOpen ? `${styles.open}` : ""}`}
    >
      <div className={styles["dropdown-toggle"]} onClick={toggleDropdown}>
        {dropDownDisplayText}
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#808080" }} />
      </div>
      <div className={styles["dropdown-list"]}>
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleSelectedOptionsChange(option)}
            />
            {option.toUpperCase()}
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectDropDown;
