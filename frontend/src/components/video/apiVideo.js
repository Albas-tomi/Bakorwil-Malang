import axios from "axios";

export const getVideo = async () => {
  const res = await axios.get("http://localhost:4000/video");
  return res.data;
};

export const addDataVideo = async (
  formData,
  values,
  handleAddVideo,
  notifyAddData,
  handleCloseModal,
  formik
) => {
  try {
    await axios.post("http://localhost:4000/video", formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    handleAddVideo({
      judul: values.judul,
      link: values.link,
    });
    notifyAddData("Data Video berhasil ditambahkan!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const deleteVideo = async (id, setDataVideo, notifyDelete) => {
  try {
    await axios.delete(`http://localhost:4000/video/${id}`);
    setDataVideo((prevData) => prevData.filter((Video) => Video.id !== id));
    notifyDelete("Data Video Berhasil Dihapus!");
  } catch (error) {
    console.log(error);
  }
};

export const editDataVideo = async (
  pickOfVideoEdit,
  formData,
  values,
  handleEditVideo,
  notifyEdit,
  handleCloseModal,
  formik
) => {
  try {
    await axios.patch(
      `http://localhost:4000/video/${pickOfVideoEdit.id}`,
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );
    handleEditVideo({
      id: pickOfVideoEdit.id,
      judul: values.judul,
      link: values.link,
    });
    notifyEdit("Data Berita Berhasil Di edit!");
    handleCloseModal();
    formik.resetForm();
    // window.location.reload();
  } catch (error) {
    console.log("Error submitting form:", error);
  }
};
