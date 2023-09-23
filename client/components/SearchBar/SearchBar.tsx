import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Fuse from "fuse.js";
import { SearchBarProps } from "@/types/componentProps";
import styles from '../SearchBar/SearchBar.module.scss';



const SearchBar = ({ allContent, setSearchTerm, searchTerm }: SearchBarProps) => {
  const [results, setResults] = useState<any[]>([]);
  const titles = allContent.map((media) => {
    return media.volumeInfo.title;
  });

  const fuseOptions = {
    keys: ["name"],
    threshold: 0.3,
  };

  const fuse = new Fuse(titles, fuseOptions);

  const handleFuzzySearch = (newQuery: string) => {
    const searchResults: any[] = fuse.search(newQuery);
    setResults(searchResults);
  };

  return (
    <div className={styles["search-input-container"]}>
      <input
        className={styles.searchbar}
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
          handleFuzzySearch(event.target.value);
        }}
        type="text"
        placeholder="Search.."
      />
      <FontAwesomeIcon icon={faSearch} className={styles["search-icon"]} />
      <div className={styles["searchbar-list"]}>
        {results.map((result, index) => {
          return <li key={index}>{result.item}</li>;
        })}
      </div>
    </div>
  );
};

export default SearchBar;
