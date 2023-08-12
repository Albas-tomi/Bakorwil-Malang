import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { editDataBakorwil } from "./apiBakorwil";

const Schema = Yup.object({
  judul: Yup.string().required(),
  link: Yup.string().required(),
  gambar: Yup.string().required(),
});

const EditBakorwil = ({ handleEditBakorwil, pickOfBakorwilEdit }) => {
  const handleCloseModal = () => {
    window.my_modal_editBakorwil.close();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      judul: pickOfBakorwilEdit?.judul || "",
      link: pickOfBakorwilEdit?.link || "",
      gambar: pickOfBakorwilEdit?.gambar || "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);

      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("link", values.link);
      formData.append("img", values.gambar);
      editDataBakorwil(
        pickOfBakorwilEdit,
        formData,
        values,
        handleEditBakorwil,
        notifyEdit,
        handleCloseModal,
        formik
      );
    },
  });

  return (
    <div>
      <dialog id="my_modal_editBakorwil" className="modal   backdrop-blur-sm ">
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
          <h1 className="text-2xl my-3 mx-auto font-bold">
            Edit Data Bakorwil
          </h1>

          <div className="flex flex-col mb-3">
            <label className="text-xl" htmlFor="judul">
              Nama Bakorwil
            </label>
            {formik.errors.judul && formik.touched.judul && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.judul}
              </p>
            )}
            <input
              className="input input-bordered input-info w-full"
              id="judul"
              name="judul"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.judul}
            />
          </div>
          <div className="mb-3 rounded-md">
            <label className="text-xl" htmlFor="link">
              Link Bakorwil
            </label>
            {formik.errors.link && formik.touched.link && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.link}
              </p>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label className="text-xl" htmlFor="gambar">
              Logo Bakorwil{" "}
            </label>
            {formik.errors.gambar && formik.touched.gambar && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.gambar}
              </p>
            )}
            <input
              id="link"
              name="link"
              value={formik.values.link}
              onChange={formik.handleChange}
              type="text"
              className="input  input-bordered input-info w-full "
            />
            <input
              type="file"
              id="gambar"
              accept=".jpg,.jpeg,.png"
              name="gambar"
              onChange={(e) => {
                formik.setFieldValue("gambar", e.target.files[0]);
              }}
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
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

export default EditBakorwil;
