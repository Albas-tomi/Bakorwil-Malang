import axios from "axios";
const API_ENDPOINTS_BAKORWIL = import.meta.env.VITE_APP_DOMAIN;

export const getVideo = async () => {
  const res = await axios.get(`${API_ENDPOINTS_BAKORWIL}/video`);
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
    await axios.post(`${API_ENDPOINTS_BAKORWIL}/video`, formData, {
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
    await axios.delete(`${API_ENDPOINTS_BAKORWIL}/video/${id}`);
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
      `${API_ENDPOINTS_BAKORWIL}/video/${pickOfVideoEdit.id}`,
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
