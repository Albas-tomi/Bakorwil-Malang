import axios from "axios";
const API_ENDPOINTS_BAKORWIL = import.meta.env.VITE_APP_DOMAIN;

export const getDokumen = async () => {
  const res = await axios.get(`${API_ENDPOINTS_BAKORWIL}/dokumen`);
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
    await axios.post(`${API_ENDPOINTS_BAKORWIL}/dokumen`, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddDokumen({
      judul: values.judul,
      link: values.link,
      tahun: values.tahun,
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
    await axios.delete(`${API_ENDPOINTS_BAKORWIL}/dokumen/${id}`);
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
      `${API_ENDPOINTS_BAKORWIL}/dokumen/${pickOfDokumenEdit.id}`,
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
      tahun: values.tahun,
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
