import axios from "axios";
const API_ENDPOINTS_BAKORWIL = import.meta.env.VITE_APP_DOMAIN;

export const getCarrouesel = async () => {
  const res = await axios.get(`${API_ENDPOINTS_BAKORWIL}/carrousel`);
  return res.data;
};

export const deleteCarrousel = async (id, setDataCarrousel, notifyDelete) => {
  try {
    await axios.delete(`${API_ENDPOINTS_BAKORWIL}/carrousel/${id}`);
    setDataCarrousel((prevData) =>
      prevData.filter((carrousel) => carrousel.id !== id)
    );
    notifyDelete("Data Carrousel Berhasil Dihapus!");
  } catch (error) {
    console.log(error.message);
  }
};

export const addDataCarrousel = async (
  formData,
  values,
  handleAddCarrousel,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post(`${API_ENDPOINTS_BAKORWIL}/carrousel`, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddCarrousel({
      judul: values.judul,
      gambar: values.gambar,
    });
    notifyAddData("Data Carrousel berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log(error);
  }
};

export const editDataCarrousel = async (
  pickOfCarrouselEdit,
  formData,
  values,
  handleEdit,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `${API_ENDPOINTS_BAKORWIL}/carrousel/${pickOfCarrouselEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEdit({
      id: pickOfCarrouselEdit.id,
      judul: values.judul,
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
