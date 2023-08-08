import axios from "axios";

export const getPengumuman = async () => {
  const res = await axios.get("http://localhost:4000/pengumuman");
  return res.data;
};

export const deletePengumuman = async (id, setDataPengumuman, notifyDelete) => {
  try {
    await axios.delete(`http://localhost:4000/pengumuman/${id}`);
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
      `http://localhost:4000/pengumuman/${pickOfPengumumanEdit.id}`,
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
    // window.location.reload();
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
    await axios.post("http://localhost:4000/pengumuman", formData, {
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
    // window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
