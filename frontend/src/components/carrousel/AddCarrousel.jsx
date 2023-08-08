import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { addDataCarrousel } from "./apiCarrousel";

const Schema = Yup.object({
  judul: Yup.string().required(),
  gambar: Yup.string().required(),
});

const AddCarrousel = ({ handleAddCarrousel }) => {
  const handleCloseModal = () => {
    window.my_modal_addCarrousel.close();
  };
  const formik = useFormik({
    initialValues: {
      judul: "",
      gambar: "",
    },
    validationSchema: Schema,

    onSubmit: async (values) => {
      const notifyAddData = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("img", values.gambar);
      addDataCarrousel(
        formData,
        values,
        handleAddCarrousel,
        notifyAddData,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <div>
      {" "}
      <dialog id="my_modal_addCarrousel" className="modal   backdrop-blur-sm ">
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
          <h1 className="text-2xl my-3 mx-auto font-bold">
            Tambah Data Carrousel
          </h1>

          <div className="flex flex-col mb-3 ">
            <label className="text-xl" htmlFor="judul">
              Judul Carrousel
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

          <div className="mb-3 flex flex-col">
            <label className="text-xl" htmlFor="gambar">
              Gambar Carrousel
            </label>
            {formik.errors.gambar && formik.touched.gambar && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.gambar}
              </p>
            )}
            <input
              type="file"
              id="gambar"
              accept=".jpg,.jpeg,.png"
              name="gambar"
              onChange={(e) =>
                formik.setFieldValue("gambar", e.target.files[0])
              }
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

export default AddCarrousel;
