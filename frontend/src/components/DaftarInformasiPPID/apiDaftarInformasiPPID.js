import axios from "axios";

export const getDaftarInformasiPPID = async () => {
  const res = await axios.get("http://localhost:4000/daftarinformasi");
  return res.data;
};

export const addDataDaftarInformasiPPID = async (
  formData,
  values,
  handleAddDaftarInformasiPPID,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post("http://localhost:4000/daftarinformasi", formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddDaftarInformasiPPID({
      judul: values.judul,
      deskripsi: values.deskripsi,
      link: values.link,
      jenisKategori: values.jenisKategori,
      kategori: values.kategori,
    });
    notifyAddData("Data DaftarInformasiPPID berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log(error);
  }
};

export const deleteDaftarInformasiPPID = async (
  id,
  setDataDaftarInformasiPPID,
  notifyDelete
) => {
  try {
    await axios.delete(`http://localhost:4000/daftarinformasi/${id}`);
    setDataDaftarInformasiPPID((prevData) =>
      prevData.filter((DaftarInformasiPPID) => DaftarInformasiPPID.id !== id)
    );
    notifyDelete("Data DaftarInformasiPPID Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const editDataDaftarInformasiPPID = async (
  pickOfDaftarInformasiPPIDEdit,
  formData,
  values,
  handleEditDaftarInformasiPPID,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `http://localhost:4000/daftarinformasi/${pickOfDaftarInformasiPPIDEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEditDaftarInformasiPPID({
      id: pickOfDaftarInformasiPPIDEdit.id,
      judul: values.judul,
      deskripsi: values.deskripsi,
      link: values.link,
      jenisKategori: values.jenisKategori,
      kategori: values.kategori,
    });
    notifyEdit("Data Berita Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
