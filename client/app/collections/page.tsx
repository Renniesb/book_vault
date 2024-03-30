"use client"
import { useEffect, useState } from 'react';
import { fetchData } from "../../api";
import {filterAndSortGenres, filterAndSortYears} from '../../helpers'
import { Item } from '@/types/api/books';
import ContentControls from '@/components/ContentControls/ContentControls';
import Content from '@/components/Content/Content';
import styles from '@/app/page.module.scss';
import { Login } from '@/components/Login/Login';
import HeaderBar  from '@/components/HeaderBar/HeaderBar';



export default function Home() {
  const [data, setData] = useState<Item[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [checkedGenres, setCheckedGenres] = useState([]);
  const [checkedYears, setCheckedYears] = useState([]);
  const [contentTypeSelected, setSelectedContentType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData()
      .then((responseData: Item[]) => {

        const sortedGenres = filterAndSortGenres(responseData);
        const sortedYears = filterAndSortYears(responseData);
        console.log('responseData')
        setData(responseData);
        setGenres(sortedGenres);
        setYears(sortedYears);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  const filters = {
    genres,
    years,
  };

  const selections = {
    checkedGenres,
    checkedYears,
    contentTypeSelected,
    searchTerm,
  };

  const selectionMethods = {
    setCheckedGenres,
    setCheckedYears,
    setSelectedContentType,
    setSearchTerm,
  };

  return (
    <div className={styles.app}>
      <div>
        <HeaderBar isLoggedIn={false}></HeaderBar>
        <ContentControls
          allContent={data}
          {...filters}
          {...selections}
          {...selectionMethods}
        />
        <Content allContent={data} {...selections} />
      </div>
    </div>
  );
}
