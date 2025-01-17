import axios from "axios";

export const api = {
  async loadImages(num) {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${num}`
    );
    return res.data;
  },
  async getImages() {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    return res.data;
  },
  async getCharacter(id) {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return res.data;
  },
  // Получение персонажа из эпизода
  async getEpisodeChatacter(url) {
    const res = await axios.get(url);
    // debugger;
    return res.data;
  },

  // Получение всех эпизодов
  async getEpisodes() {
    const res = await axios.get("https://rickandmortyapi.com/api/episode");
    return res.data;
  },
  // Получение следующей страницы эпизодов
  async loadEpisodes(num) {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${num}`
    );
    return res.data;
  },
  // Получение одного эпизода
  async getEpisode(id) {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    return res.data;
  },
  // Получение всех локаций
  async getLocations() {
    const res = await axios.get("https://rickandmortyapi.com/api/location");
    return res.data;
  },
  // Получение следующей страницы локаций
  async loadLocations(num) {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/location?page=${num}`
    );
    return res.data;
  },
  // Получение одной локации
  async getLocation(id) {
    const res = await axios.get(`rickandmortyapi.com/api/location/${id}`);
    return res.data;
  },
};
