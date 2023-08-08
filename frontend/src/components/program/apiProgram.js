import axios from "axios";

export const getProgram = async () => {
  const res = await axios.get("http://localhost:4000/program");
  return res.data;
};

export const addDataProgram = async (
  formData,
  values,
  handleAddProgram,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post("http://localhost:4000/program", formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddProgram({
      judul: values.judul,
      deskripsi: values.deskripsi,
    });
    notifyAddData("Data Program berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const deleteProgram = async (id, setDataProgram, notifyDelete) => {
  try {
    await axios.delete(`http://localhost:4000/program/${id}`);
    setDataProgram((prevData) =>
      prevData.filter((Program) => Program.id !== id)
    );
    notifyDelete("Data Program Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const editDataProgram = async (
  pickOfProgramEdit,
  formData,
  values,
  handleEditProgram,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `http://localhost:4000/program/${pickOfProgramEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEditProgram({
      id: pickOfProgramEdit.id,
      judul: values.judul,
      deskripsi: values.deskripsi,
    });
    notifyEdit("Data Berita Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
