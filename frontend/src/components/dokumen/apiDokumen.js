import axios from "axios";

export const getDokumen = async () => {
  const res = await axios.get("http://localhost:4000/dokumen");
  return res.data;
};

export const addDataDokumen = async (
  formData,
  values,
  handleAddDokumen,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post("http://localhost:4000/dokumen", formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddDokumen({
      judul: values.judul,
      link: values.link,
      kategori: values.kategori,
    });
    notifyAddData("Data Dokumen berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const deleteDokumen = async (id, setDataDokumen, notifyDelete) => {
  try {
    await axios.delete(`http://localhost:4000/dokumen/${id}`);
    setDataDokumen((prevData) =>
      prevData.filter((dokumen) => dokumen.id !== id)
    );
    notifyDelete("Data Dokumen Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const editDataDokumen = async (
  pickOfDokumenEdit,
  formData,
  values,
  handleEditDokumen,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `http://localhost:4000/dokumen/${pickOfDokumenEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEditDokumen({
      id: pickOfDokumenEdit.id,
      judul: values.judul,
      link: values.link,
      kategori: values.kategori,
    });
    notifyEdit("Data Berita Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
