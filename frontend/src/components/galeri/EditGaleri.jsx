import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { editDataGaleri } from "./apiGaleri";

const Schema = Yup.object({
  judul: Yup.string().required(),
  kategori: Yup.string().required(),
  gambar: Yup.string().required(),
});

const EditGaleri = ({ handleEditGaleri, pickOfGaleriEdit }) => {
  const [editor, setEditor] = useState(null);

  const handleCloseModal = () => {
    window.my_modal_editGaleri.close();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      judul: pickOfGaleriEdit?.judul || "",
      kategori: pickOfGaleriEdit?.kategori || "",
      gambar: pickOfGaleriEdit?.gambar || "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);

      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("kategori", values.kategori);
      formData.append("img", values.gambar);
      editDataGaleri(
        pickOfGaleriEdit,
        formData,
        values,
        handleEditGaleri,
        notifyEdit,
        handleCloseModal,
        formik
      );
    },
  });

  return (
    <div>
      <dialog id="my_modal_editGaleri" className="modal   backdrop-blur-sm ">
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
          <h1 className="text-2xl my-3 mx-auto font-bold">Edit Data Galeri</h1>

          <div className="flex flex-col mb-3">
            <label className="text-xl" htmlFor="judul">
              Judul Galeri
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

          <div className="mb-3 flex flex-col  rounded-md">
            <label className="text-xl" htmlFor="kategori">
              Kategori Dokumen
            </label>
            {formik.errors.kategori && formik.touched.kategori && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.kategori}
              </p>
            )}

            <select
              id="kategori"
              name="kategori"
              value={formik.values.kategori}
              onChange={formik.handleChange}
              className="input input-bordered input-info w-full max-w-xs"
            >
              <option value="">Pilih Kategori</option>
              <option value="Rapat">Rapat</option>
              <option value="Seminar">Seminar</option>
              <option value="Kegiatan">Kegiatan</option>
              <option value="KORPRI">KORPRI</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-3 flex flex-col">
            <label className="text-xl" htmlFor="gambar">
              Gambar Galeri{" "}
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

export default EditGaleri;
