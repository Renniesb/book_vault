import axios from "axios";
const API_ENDPOINT = process.env.NEXT_PUBLIC_Books_API_ENDPOINT;
import { BookResponse } from "./types/api/books";
async function fetchData() {
  try {
    const response: BookResponse = await axios.get(API_ENDPOINT+"subject:history");
    return response.data.items;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export { fetchData };
