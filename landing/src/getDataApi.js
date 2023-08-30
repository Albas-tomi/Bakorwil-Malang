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
export const getDataDokumen = async () => {
  const res = await axios.get("http://localhost:4000/dokumen");
  return res.data;
};
export const getDataPejabat = async () => {
  const res = await axios.get("http://localhost:4000/pejabat");
  return res.data;
};
export const getDataDaftarInformasiPPID = async () => {
  const res = await axios.get("http://localhost:4000/daftarinformasi");
  return res.data;
};

export const editDataBerita = async (beritaData, formData) => {
  try {
    await axios.patch(
      `http://localhost:4000/berita/${beritaData.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log("Error submitting form:", error.message);
  }
};
