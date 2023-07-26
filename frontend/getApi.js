import axios from "axios";

// Pengumuman==========================================================================

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
    notifyDelete("Data Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const editDataPengumuman = async (
  idPengumumanEdit,
  formData,
  values,
  handleEdit,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `http://localhost:4000/pengumuman/${idPengumumanEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEdit({
      id: idPengumumanEdit.id,
      judul: values.judul,
      deskripsi: values.deskripsi,
      gambar: values.gambar,
    });
    notifyEdit("Data Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
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
    notifyAddData("Data berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};

// =======================================Pengumuman===================================

// =====================================Berita========================================
export const getBerita = async () => {
  const res = await axios.get("http://localhost:4000/berita");
  return res.data;
};

export const deleteBerita = async (id, setDataBerita, notifyDelete) => {
  try {
    await axios.delete(`http://localhost:4000/berita/${id}`);
    setDataBerita((prevData) => prevData.filter((berita) => berita.id !== id));
    notifyDelete("Data Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const addDataBerita = async (
  formData,
  values,
  handleAddPengumuman,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post("http://localhost:4000/berita", formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddPengumuman({
      judul: values.judul,
      deskripsi: values.deskripsi,
      gambar: values.gambar,
    });
    notifyAddData("Data berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
  } catch (error) {
    console.log(error);
  }
};
