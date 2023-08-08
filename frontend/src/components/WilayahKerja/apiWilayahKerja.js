import axios from "axios";

export const getWilayahKerja = async () => {
  const res = await axios.get("http://localhost:4000/wilayahKerja");
  return res.data;
};

export const deleteWilayahKerja = async (
  id,
  setDataWilayahKerja,
  notifyDelete
) => {
  try {
    await axios.delete(`http://localhost:4000/wilayahKerja/${id}`);
    setDataWilayahKerja((prevData) =>
      prevData.filter((WilayahKerja) => WilayahKerja.id !== id)
    );
    notifyDelete("Data WilayahKerja Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const editDataWilayahKerja = async (
  pickOfWilayahKerjaEdit,
  formData,
  values,
  handleEdit,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `http://localhost:4000/wilayahKerja/${pickOfWilayahKerjaEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEdit({
      id: pickOfWilayahKerjaEdit.id,
      judul: values.judul,
      link: values.link,
      gambar: values.gambar,
    });
    notifyEdit("Data WilayahKerja Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};

export const addDataWilayahKerja = async (
  formData,
  values,
  handleAddWilayahKerja,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post("http://localhost:4000/wilayahKerja", formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddWilayahKerja({
      judul: values.judul,
      link: values.link,
      gambar: values.gambar,
    });
    notifyAddData("Data Wilayah Kerja berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
