import axios from "axios";

export const getPejabat = async () => {
  const res = await axios.get("http://localhost:4000/pejabat");
  return res.data;
};

export const addDataPejabat = async (
  formData,
  values,
  handleAddPejabat,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post("http://localhost:4000/pejabat", formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddPejabat({
      nama: values.nama,
      jabatan: values.jabatan,
      kategori: values.kategori,
    });
    notifyAddData("Data Pejabat berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const deletePejabat = async (id, setDataPejabat, notifyDelete) => {
  try {
    await axios.delete(`http://localhost:4000/pejabat/${id}`);
    setDataPejabat((prevData) =>
      prevData.filter((Pejabat) => Pejabat.id !== id)
    );
    notifyDelete("Data Pejabat Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const editDataPejabat = async (
  pickOfPejabatEdit,
  formData,
  values,
  handleEditPejabat,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `http://localhost:4000/pejabat/${pickOfPejabatEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEditPejabat({
      id: pickOfPejabatEdit.id,
      nama: values.nama,
      jabatan: values.jabatan,
      kategori: values.kategori,
    });
    notifyEdit("Data Berita Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
