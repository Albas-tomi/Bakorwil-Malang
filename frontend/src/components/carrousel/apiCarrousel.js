import axios from "axios";

export const getCarrouesel = async () => {
  const res = await axios.get("http://localhost:4000/carrousel");
  return res.data;
};

export const deleteCarrousel = async (id, setDataCarrousel, notifyDelete) => {
  try {
    await axios.delete(`http://localhost:4000/carrousel/${id}`);
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
    await axios.post("http://localhost:4000/carrousel", formData, {
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
    // window.location.reload();
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
      `http://localhost:4000/carrousel/${pickOfCarrouselEdit.id}`,
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
    // window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
