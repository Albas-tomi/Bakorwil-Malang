import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { addDataVideo } from "./apiVideo";
const Schema = Yup.object({
  judul: Yup.string().required(),
  link: Yup.string().required(),
});

const AddVideo = ({ handleAddVideo }) => {
  const handleCloseModal = () => {
    window.my_modal_addVideo.close();
  };

  const formik = useFormik({
    initialValues: {
      judul: "",
      link: "https://youtube.com/embed/",
    },
    ValidationSchema: Schema,

    onSubmit: async (values) => {
      const notifyAddData = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("link", values.link);
      addDataVideo(
        formData,
        values,
        handleAddVideo,
        notifyAddData,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <dialog id="my_modal_addVideo" className="modal   backdrop-blur-sm ">
      <form
        method="dialog"
        data-testid="form"
        className=" bg-white overflow-y-scroll  px-6 py-3 relative min-w-[600px] max-h-screen max-w-3xl rounded-md z-10"
        name="form"
        onSubmit={formik.handleSubmit}
      >
        <form
          method="dialog"
          className="modal-box shadow-none right-0  absolute w-full bg-transparent mx-auto"
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col gap-3 mb-3">
          <h1 className="text-2xl my-3 mx-auto font-bold">Tambah Video</h1>
          <p className="text-xs">
            Tambahkan Link Id Video yang digunakan contoh :{" "}
            <strong>_1UlylSfSTk</strong>
          </p>
        </div>

        <div className="flex flex-col mb-3 ">
          <label className="text-xl" htmlFor="judul">
            Nama Video
          </label>
          {formik.errors.judul && formik.touched.judul && (
            <p className="mt-1 text-red-500 max-[640px]:text-sm">
              {formik.errors.judul}
            </p>
          )}
          <input
            className="input  input-bordered input-info w-full "
            id="judul"
            name="judul"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.judul}
          />
        </div>

        <div className="mb-3 flex flex-col  rounded-md">
          <label className="text-xl" htmlFor="link">
            Isi Video
          </label>
          {formik.errors.link && formik.touched.link && (
            <p className="mt-1 text-red-500 max-[640px]:text-sm">
              {formik.errors.link}
            </p>
          )}

          <input
            id="link"
            name="link"
            value={formik.values.link}
            onChange={formik.handleChange}
            type="text"
            className="input input-bordered input-info w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-green-300 hover:bg-green-800 rounded-md p-2"
        >
          Submit
        </button>
      </form>
    </dialog>
  );
};

export default AddVideo;
