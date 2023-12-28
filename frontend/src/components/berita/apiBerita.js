import axios from "axios";
const API_ENDPOINTS_BAKORWIL = import.meta.env.VITE_APP_DOMAIN;

export const getBerita = async () => {
  const res = await axios.get(`${API_ENDPOINTS_BAKORWIL}/berita`);
  return res.data;
};

export const deleteBerita = async (id, setDataBerita, notifyDelete) => {
  try {
    await axios.delete(`${API_ENDPOINTS_BAKORWIL}/berita/${id}`);
    setDataBerita((prevData) => prevData.filter((berita) => berita.id !== id));
    notifyDelete("Data Berita Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const addDataBerita = async (
  formData,
  values,
  handleAddBerita,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post(`${API_ENDPOINTS_BAKORWIL}/berita`, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddBerita({
      judul: values.judul,
      deskripsi: values.deskripsi,
      gambar: values.gambar,
    });
    notifyAddData("Data Berita berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log(error);
  }
};

export const editDataBerita = async (
  pickOfBeritaEdit,
  formData,
  values,
  handleEdit,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `${API_ENDPOINTS_BAKORWIL}/berita/${pickOfBeritaEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEdit({
      id: pickOfBeritaEdit.id,
      judul: values.judul,
      deskripsi: values.deskripsi,
      gambar: values.gambar,
    });
    notifyEdit("Data Berita Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
