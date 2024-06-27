import axios from 'axios';
import { Movie } from '../types';

const API_KEY = '7R62EK3-RM84VT2-Q5QV457-0W9PX6C';
const BASE_URL = 'https://api.kinopoisk.dev/v1';

export const getMovies = async (page: number = 1): Promise<{ docs: Movie[] }> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
      params: {
        page: page,
        limit: 50,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieById = async (id: string): Promise<Movie> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
};