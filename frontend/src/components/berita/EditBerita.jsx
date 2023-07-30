import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { editDataBerita, editDataPengumuman } from "../../../getApi";

const Schema = Yup.object({
  judul: Yup.string().required(),
  deskripsi: Yup.string().required(),
  gambar: Yup.string().required(),
});

const EditBerita = ({ handleEditBerita, pickOfBeritaEdit }) => {
  const [editor, setEditor] = useState(null);

  const handleCloseModal = () => {
    window.my_modal_editBerita.close();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      judul: pickOfBeritaEdit?.judul || "",
      deskripsi: pickOfBeritaEdit?.deskripsi || "",
      gambar: pickOfBeritaEdit?.gambar || "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);

      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("deskripsi", values.deskripsi);
      formData.append("img", values.gambar);
      editDataBerita(
        pickOfBeritaEdit,
        formData,
        values,
        handleEditBerita,
        notifyEdit,
        handleCloseModal,
        formik
      );
    },
  });

  return (
    <div>
      <dialog
        id="my_modal_editBerita"
        className="modal overflow-y-visible bg-black/50"
      >
        <form
          data-testid="form"
          className=" bg-white overflow-y-scroll px-6 py-3 relative  max-h-screen max-w-3xl rounded-md z-10"
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
          <h1 className="text-2xl my-3 mx-auto font-bold">Edit Data Berita</h1>

          <div className="flex flex-col mb-3">
            <label className="text-xl" htmlFor="judul">
              Judul Berita
            </label>
            {formik.errors.judul && formik.touched.judul && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.judul}
              </p>
            )}
            <input
              className="input input-bordered input-info w-full max-w-xs"
              id="judul"
              name="judul"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.judul}
            />
          </div>
          <div className="mb-3 rounded-md">
            <label className="text-xl" htmlFor="deskripsi">
              Isi Berita
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
              data={formik.values.deskripsi}
              onChange={(event, editor) => {
                const data = editor.getData();
                formik.setFieldValue("deskripsi", data);
                setEditor(editor);
              }}
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="text-xl" htmlFor="gambar">
              Gambar Berita{" "}
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

export default EditBerita;
