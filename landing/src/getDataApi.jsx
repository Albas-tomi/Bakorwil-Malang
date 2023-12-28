import axios from "axios";

export const getDataVideo = async () => {
  const res = await axios.get(`${import.meta.env.VITE_APP_DOMAIN}/video`);
  return res.data;
};
export const getDataCarrousel = async () => {
  const res = await axios.get(`${import.meta.env.VITE_APP_DOMAIN}/carrousel`);
  return res.data;
};
export const getDataGaleri = async () => {
  const res = await axios.get(`${import.meta.env.VITE_APP_DOMAIN}/galeri`);
  return res.data;
};
export const getDataPengumuman = async () => {
  const res = await axios.get(`${import.meta.env.VITE_APP_DOMAIN}/pengumuman`);
  return res.data;
};
export const getDataBerita = async () => {
  const res = await axios.get(`${import.meta.env.VITE_APP_DOMAIN}/berita`);
  return res.data;
};
export const getDataDokumen = async () => {
  const res = await axios.get(`${import.meta.env.VITE_APP_DOMAIN}/dokumen`);
  return res.data;
};
export const getDataPejabat = async () => {
  const res = await axios.get(`${import.meta.env.VITE_APP_DOMAIN}/pejabat`);
  return res.data;
};
export const getDataDaftarInformasiPPID = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_APP_DOMAIN}/daftarinformasi`
  );
  return res.data;
};

export const editDataBerita = async (beritaData, formData) => {
  try {
    await axios.patch(
      `${import.meta.env.VITE_APP_DOMAIN}/berita/${beritaData.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(`Error submitting form:`, error.message);
  }
};
