import axios from "axios";

export const getPPID = async () => {
  const res = await axios.get("http://localhost:4000/ppid");
  return res.data;
};

export const addDataPPID = async (
  formData,
  values,
  handleAddPPID,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post("http://localhost:4000/ppid", formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddPPID({
      judul: values.judul,
      link: values.link,
    });
    notifyAddData("Data PPID berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const deletePPID = async (id, setDataPPID, notifyDelete) => {
  try {
    await axios.delete(`http://localhost:4000/ppid/${id}`);
    setDataPPID((prevData) => prevData.filter((PPID) => PPID.id !== id));
    notifyDelete("Data PPID Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const editDataPPID = async (
  pickOfPPIDEdit,
  formData,
  values,
  handleEditPPID,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `http://localhost:4000/ppid/${pickOfPPIDEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEditPPID({
      id: pickOfPPIDEdit.id,
      judul: values.judul,
      link: values.link,
    });
    notifyEdit("Data PPID Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
