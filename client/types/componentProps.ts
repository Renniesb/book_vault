import { Item } from "../types/api/books";

export interface ContentProps {
    allContent: Item[];
    checkedGenres: string[];
    checkedYears: string[];
    contentTypeSelected: string;
    searchTerm: string;
}

export interface ContentControlProps {
    allContent: Item[];
    genres: string[];
    years: string[];
    checkedGenres: string[];
    setCheckedGenres: Function;
    checkedYears: string[];
    setCheckedYears: Function,
    contentTypeSelected: string;
    setSelectedContentType: Function,
    searchTerm: string;
    setSearchTerm: Function;
}

export interface SearchBarProps {
    allContent: Item[];
    setSearchTerm: Function;
    searchTerm: string;
}

export interface MultiSelectProps {
    options: string[];
    selectedOptions: string[];
    setSelectedOptions: Function;
    dropDownDisplayText: string;
}