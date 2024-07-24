import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: Number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: string;
  metacritic: number;
}

const useGames = (selectedGenere: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenere?.id } }, [
    selectedGenere?.id,
  ]);

export default useGames;
