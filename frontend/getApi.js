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
    notifyDelete("Data Berita Berhasil Dihapus!");
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
    notifyAddData("Data Berita berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
  } catch (error) {
    console.log(error);
  }
};

export const editDataBerita = async (
  pickOfBeritaEdit,
  formData,
  values,
  handleEdit,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `http://localhost:4000/berita/${pickOfBeritaEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEdit({
      id: pickOfBeritaEdit.id,
      judul: values.judul,
      deskripsi: values.deskripsi,
      gambar: values.gambar,
    });
    notifyEdit("Data Berita Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};

// =============================================Dokumen ================================

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
    });
    notifyAddData("Data Dokumen berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
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
    });
    notifyEdit("Data Berita Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
