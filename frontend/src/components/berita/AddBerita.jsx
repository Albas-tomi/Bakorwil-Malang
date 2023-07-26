import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { addDataBerita } from "../../../getApi";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast } from "react-toastify";

const Schema = Yup.object({
  judul: Yup.string().required(),
  deskripsi: Yup.string().required(),
  gambar: Yup.string().required(),
});

const AddBerita = ({ handleAddBerita }) => {
  const handleCloseModal = () => {
    window.my_modal_addBerita.close();
  };

  const formik = useFormik({
    initialValues: {
      judul: "",
      deskripsi: "",
      gambar: "",
    },
    validationSchema: Schema,

    onSubmit: async (values) => {
      const notifyAddData = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("deskripsi", values.deskripsi);
      formData.append("img", values.gambar);
      addDataBerita(
        formData,
        values,
        handleAddBerita,
        notifyAddData,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <>
      <dialog
        id="my_modal_addBerita"
        className="modal overflow-y-visible  bg-black/50"
      >
        <form
          method="dialog"
          data-testid="form"
          className=" bg-white overflow-scroll px-6 relative  max-h-screen max-w-3xl rounded-md z-10"
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
            Tambah Data Berita
          </h1>

          <div className="flex flex-col mb-3 ">
            <label className="text-xl" htmlFor="judul">
              Judul Pengumuman
            </label>
            {formik.errors.judul && formik.touched.judul && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.judul}
              </p>
            )}
            <input
              className="input  input-bordered input-info w-full max-w-xs"
              id="judul"
              name="judul"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.judul}
            />
          </div>

          <div className="mb-3  rounded-md">
            <label className="text-xl" htmlFor="deskripsi">
              Isi Pengumuman
            </label>
            {formik.errors.deskripsi && formik.touched.deskripsi && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.deskripsi}
              </p>
            )}
            <CKEditor
              editor={ClassicEditor}
              id="deskripsi"
              name="deskripsi"
              type="text"
              onChange={(event, editor) => {
                const data = editor.getData();
                formik.setFieldValue("deskripsi", data);
              }}
              value={formik.values.judul}
            />

            <input
              id="deskripsi"
              name="deskripsi"
              value={formik.values.deskripsi}
              onChange={formik.handleChange}
              type="text"
              className="input hidden input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="text-xl" htmlFor="gambar">
              Image Pengumuman
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
    </>
  );
};

export default AddBerita;
