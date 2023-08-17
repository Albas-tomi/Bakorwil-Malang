import axios from "axios";

export const getDataVideo = async () => {
  const res = await axios.get("http://localhost:4000/video");
  return res.data;
};
export const getDataCarrousel = async () => {
  const res = await axios.get("http://localhost:4000/carrousel");
  return res.data;
};
export const getDataGaleri = async () => {
  const res = await axios.get("http://localhost:4000/galeri");
  return res.data;
};
export const getDataPengumuman = async () => {
  const res = await axios.get("http://localhost:4000/pengumuman");
  return res.data;
};
export const getDataBerita = async () => {
  const res = await axios.get("http://localhost:4000/berita");
  return res.data;
};
