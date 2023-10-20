import axios from "axios";
const API_ENDPOINT = process.env.NEXT_PUBLIC_Books_API_ENDPOINT;
import { BookResponse } from "./types/api/books";
async function fetchData() {
  try {
    const response: BookResponse = await axios.get(API_ENDPOINT+"history");
    return response.data.items;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


async function postNewBook(API_ENDPOINT: string, bookTitle: string, genres: string, photoLink: string, description: string) {
  try {
    const response = await axios.post(API_ENDPOINT, {
      bookTitle,
      genres,
      photoLink,
      description,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}



export { fetchData, postNewBook };
