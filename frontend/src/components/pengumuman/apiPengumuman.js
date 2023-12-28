import axios from "axios";
const API_ENDPOINTS_BAKORWIL = import.meta.env.VITE_APP_DOMAIN;

export const getPengumuman = async () => {
  const res = await axios.get(`${API_ENDPOINTS_BAKORWIL}/pengumuman`);
  return res.data;
};

export const deletePengumuman = async (id, setDataPengumuman, notifyDelete) => {
  try {
    await axios.delete(`${API_ENDPOINTS_BAKORWIL}/pengumuman/${id}`);
    setDataPengumuman((prevData) =>
      prevData.filter((pengumuman) => pengumuman.id !== id)
    );
    notifyDelete("Data Pengumuman Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const editDataPengumuman = async (
  pickOfPengumumanEdit,
  formData,
  values,
  handleEdit,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `${API_ENDPOINTS_BAKORWIL}/pengumuman/${pickOfPengumumanEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEdit({
      id: pickOfPengumumanEdit.id,
      judul: values.judul,
      deskripsi: values.deskripsi,
      gambar: values.gambar,
    });
    notifyEdit("Data Pengumuman Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};

export const addDataPengumuman = async (
  formData,
  values,
  handleAddPengumuman,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post(`${API_ENDPOINTS_BAKORWIL}/pengumuman`, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddPengumuman({
      judul: values.judul,
      deskripsi: values.deskripsi,
      gambar: values.gambar,
    });
    notifyAddData("Data Pengumuman berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
