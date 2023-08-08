import axios from "axios";

export const getBakorwil = async () => {
  const res = await axios.get("http://localhost:4000/bakorwil");
  return res.data;
};

export const deleteBakorwil = async (id, setDataBakorwil, notifyDelete) => {
  try {
    await axios.delete(`http://localhost:4000/bakorwil/${id}`);
    setDataBakorwil((prevData) =>
      prevData.filter((bakorwil) => bakorwil.id !== id)
    );
    notifyDelete("Data Bakorwil Berhasil Dihapus!");
  } catch (error) {
    console.log(error.message);
  }
};

export const addDataBakorwil = async (
  formData,
  values,
  handleAddBakorwil,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post("http://localhost:4000/bakorwil", formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddBakorwil({
      judul: values.judul,
      deskripsi: values.deskripsi,
      gambar: values.gambar,
    });
    notifyAddData("Data Bakorwil berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const editDataBakorwil = async (
  pickOfBakorwilEdit,
  formData,
  values,
  handleEdit,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `http://localhost:4000/bakorwil/${pickOfBakorwilEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEdit({
      id: pickOfBakorwilEdit.id,
      judul: values.judul,
      deskripsi: values.deskripsi,
      gambar: values.gambar,
    });
    notifyEdit("Data Bakorwil Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
