import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { editDataVideo } from "./apiVideo";

const Schema = Yup.object({
  judul: Yup.string().required(),
  link: Yup.string().required(),
});

const editVideo = ({ pickOfVideoEdit, handleEditVideo }) => {
  const [editor, setEditor] = useState(null);
  const handleCloseModal = () => {
    window.my_modal_editVideo.close();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      judul: pickOfVideoEdit?.judul || "",
      link: pickOfVideoEdit?.link || "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);

      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("link", values.link);
      editDataVideo(
        pickOfVideoEdit,
        formData,
        values,
        handleEditVideo,
        notifyEdit,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <div>
      <dialog id="my_modal_editVideo" className="modal   backdrop-blur-sm ">
        <form
          method="dialog"
          data-testid="form"
          className=" bg-white overflow-y-scroll  px-6 py-3 relative min-w-[600px] max-h-screen max-w-3xl rounded-md z-10"
          name="form"
          onSubmit={formik.handleSubmit}
        >
          <form
            method="dialog"
            className="modal-box shadow-none  w-full bg-white mx-auto"
          >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-2xl my-3 mx-auto font-bold">Edit Data Video</h1>

          <div className="flex flex-col mb-3">
            <label className="text-xl" htmlFor="judul">
              Judul Video
            </label>
            {formik.errors.judul && formik.touched.judul && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.judul}
              </p>
            )}
            <input
              className="input input-bordered input-info w-full "
              id="judul"
              name="judul"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.judul}
            />
          </div>
          <div className="mb-3 flex flex-col rounded-md">
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
    </div>
  );
};

export default editVideo;
