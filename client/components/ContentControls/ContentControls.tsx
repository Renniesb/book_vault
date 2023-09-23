import { useState, useEffect } from "react";
import { generateGenreDisplay } from "../../helpers";
import { generateYearsDisplay } from "../../helpers";
import MultiSelectDropDown from "../MultiSelectDropDown/MultiSelectDropDown";
import SearchBar from "../SearchBar/SearchBar";
import { ContentControlProps } from "@/types/componentProps";
import styles from '../ContentControls/ContentControls.module.scss';


const ContentControls = ({
  allContent,
  genres,
  years,
  checkedGenres,
  setCheckedGenres,
  checkedYears,
  setCheckedYears,
  contentTypeSelected,
  setSelectedContentType,
  searchTerm,
  setSearchTerm,
}: ContentControlProps) => {
  const [genreDisplay, setGenreDisplay] = useState("Genre");
  const [yearDisplay, setYearsDisplay] = useState("Year");

  useEffect(() => {
    setGenreDisplay(generateGenreDisplay(checkedGenres));
    setYearsDisplay(generateYearsDisplay(checkedYears));
  }, [checkedGenres, checkedYears]);
  const clearFilters = () => {
    setCheckedGenres([]);
    setCheckedYears([]);
    setSelectedContentType("");
    setSearchTerm("");
  };
  return (
    <div className={styles.controls}>
      <div className={styles["content-filters"]}>
        <div className={styles["dropdown-filters"]}>
          {genres.length > 0 && (
            <MultiSelectDropDown
              options={genres}
              selectedOptions={checkedGenres}
              setSelectedOptions={setCheckedGenres}
              dropDownDisplayText={genreDisplay}
            />
          )}
          {years.length > 0 && (
            <MultiSelectDropDown
              options={years}
              selectedOptions={checkedYears}
              setSelectedOptions={setCheckedYears}
              dropDownDisplayText={yearDisplay}
            />
          )}
        </div>
      </div>
      <div className={styles["search-clear"]}>
        <SearchBar
          allContent={allContent}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        <button className={styles["clear-filter"]} onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default ContentControls;
