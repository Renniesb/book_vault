import { filterContent } from "../../helpers";
import Image from "next/image";
import { Item } from "../../types/api/books";
import { ContentProps } from "../../types/componentProps";
import styles from '../Content/Content.module.scss';
import { useState } from "react";
import Modal from '../Model/Model';

const Content = ({
  allContent,
  checkedGenres,
  checkedYears,
  contentTypeSelected,
  searchTerm,
}: ContentProps) => {
  const filteredContent = filterContent(
    allContent,
    checkedGenres,
    checkedYears,
    contentTypeSelected,
    searchTerm
  );
  const [selectedBook, setSelectedBook] = useState<Item | null>(null);
  const handleBookClick = (book: Item) => {
    setSelectedBook(book);
  };

  const handleModalClose = () => {
    setSelectedBook(null);
  };
  return (
    <div className={styles["grid-container"]}>
      {filteredContent.length > 0 && (
        <p className={styles["results-text"]}>Results: {filteredContent.length}</p>
      )}
      {filteredContent.length === 0 && (
        <div className={styles["content-container"]}>
          <b>
            No Matching Results: Press <u>Clear Filters</u> to clear all filters
            and try again
          </b>
        </div>
      )}
      {filteredContent.map((item: Item) => {
        return (
          <div className={styles["content-container"]} key={item.volumeInfo.title}>
            <Image
              className={styles.image}
              src={item.volumeInfo.imageLinks.thumbnail}
              alt={`${item.volumeInfo.title}`}
              width={300}
              height={150}
            />
            <p className={styles["title-text"]}>
              {item.volumeInfo.title} (
              {item.volumeInfo.publishedDate.toString().substring(0, 4)})
            </p>
            <p className={styles.genres}>Genres: {item.volumeInfo.categories}</p>
            <button className={styles["more-info"]} onClick={() => handleBookClick(item)}>
              More Info
            </button>
          </div>
        );
      })}
      {selectedBook && (
        <Modal onClose={handleModalClose}>
          <h2>{selectedBook.volumeInfo.title}</h2>
          <p>{selectedBook.volumeInfo?.description || selectedBook.searchInfo?.textSnippet || "No Description"}</p>
        </Modal>
      )}
    </div>
  );
};

export default Content;
