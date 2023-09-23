import { Item } from "./types/api/books";

export function filterContent(
  allContent: Item[],
  checkedGenres: string[],
  checkedYears: string[],
  contentTypeSelected: string,
  searchTerm: string
) {
  // Create Sets for faster lookups of checked genres and years
  // Array.includes() has a time complexity o(n) Set.has() has a time complexity o(1)
  const checkedGenresSet = new Set(checkedGenres);
  const checkedYearsSet = new Set(checkedYears);


  return allContent
    .filter((media) => {

      if (
        checkedGenres.length > 0 &&
        !media.volumeInfo.categories.some((genre) => checkedGenresSet.has(genre))
      ) {
        return false;
      }

      if (checkedYears.length > 0 && !checkedYearsSet.has(media.volumeInfo.publishedDate.toString().substring(0,4))) {
        return false;
      }

      if (contentTypeSelected === "book" && media.volumeInfo.printType !== "BOOK") {
        return false;
      }

      if (contentTypeSelected === "magazine" && media.volumeInfo.printType !== "MAGAZINE") {
        return false;
      }

      if (
        searchTerm &&
        !media.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      return true;
    })
    .slice()
    .sort((a, b) => a.volumeInfo.title.localeCompare(b.volumeInfo.title));
}

export function filterAndSortGenres(responseData: Item[]) {

  const genreArrays = responseData.map((data) => data.volumeInfo.categories);
  
  const combinedArray: string[] = []
  
  combinedArray.concat(...genreArrays);

  const lowerCasedArray = combinedArray.map((str) => str.toLowerCase());

  const uniqueArray = [...new Set(lowerCasedArray)];

  const sortedArray = uniqueArray.sort();

  return sortedArray;
}

export function filterAndSortYears(responseData: Item[]){
  const years = responseData.map((data) => {
    return data.volumeInfo.publishedDate.toString().substring(0,4);
  });
  const sortedYears = [...new Set(years)].sort(
    (a, b) => parseInt(a) - parseInt(b)
  );

  return sortedYears;
}

export function generateGenreDisplay(checkedGenres: string[]) {
  if (checkedGenres.length === 0) return "GENRE";
  if (checkedGenres.length === 1) return "1 GENRE";
  return `${checkedGenres.length} GENRES`;
}

export function generateYearsDisplay(checkedYears: string[]) {
  if (checkedYears.length === 0) return "YEAR";
  if (checkedYears.length === 1) return "YEAR (1)";
  return `YEAR (${checkedYears.length})`;
}
