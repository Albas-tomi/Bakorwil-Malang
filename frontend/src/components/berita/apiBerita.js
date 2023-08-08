import axios from "axios";

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
  handleAddBerita,
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
    handleAddBerita({
      judul: values.judul,
      deskripsi: values.deskripsi,
      gambar: values.gambar,
    });
    notifyAddData("Data Berita berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
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
    // window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
