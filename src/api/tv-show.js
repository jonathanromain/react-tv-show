import axios from "axios";
import { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/popular${API_KEY_PARAM}`
      );
      return response.data
        .results; /* .results car on veut le tableau de resultat, plus populaire*/
    } catch (error) {
      alert(
        "Erreur durant la recherche des séries populaires" + error.message
      ); /* try/catch permet de savoir d'où viens l'erreur */
    }
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}/movie/${tvShowId}/recommendations${API_KEY_PARAM}`
    );
    return response.data
      .results; /* .results car on veut le tableau de resultat, plus populaire*/
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/movie${API_KEY_PARAM}&query=${title}`
    );
    return response.data
      .results; /* .results car on veut le tableau de resultat, plus populaire*/
  }
}
