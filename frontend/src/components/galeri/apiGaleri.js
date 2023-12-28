import axios from "axios";
const API_ENDPOINTS_BAKORWIL = import.meta.env.VITE_APP_DOMAIN;

export const getGaleri = async () => {
  const res = await axios.get(`${API_ENDPOINTS_BAKORWIL}/galeri`);
  return res.data;
};

export const deleteGaleri = async (id, setDataGaleri, notifyDelete) => {
  try {
    await axios.delete(`${API_ENDPOINTS_BAKORWIL}/galeri/${id}`);
    setDataGaleri((prevData) => prevData.filter((Galeri) => Galeri.id !== id));
    notifyDelete("Data Galeri Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const addDataGaleri = async (
  formData,
  values,
  handleAddGaleri,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post(`${API_ENDPOINTS_BAKORWIL}/galeri`, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddGaleri({
      judul: values.judul,
      kategori: values.kategori,
      gambar: values.gambar,
    });
    notifyAddData("Data Galeri berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log(error);
  }
};

export const editDataGaleri = async (
  pickOfGaleriEdit,
  formData,
  values,
  handleEdit,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `${API_ENDPOINTS_BAKORWIL}/galeri/${pickOfGaleriEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEdit({
      id: pickOfGaleriEdit.id,
      judul: values.judul,
      kategori: values.kategori,
      gambar: values.gambar,
    });
    notifyEdit("Data Galeri Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
