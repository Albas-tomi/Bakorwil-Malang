import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { editDataDokumen } from "../../../getApi";

const Schema = Yup.object({
  judul: Yup.string().required(),
  link: Yup.string().required(),
});

const editDokumen = ({ pickOfDokumenEdit, handleEditDokumen }) => {
  const [editor, setEditor] = useState(null);
  console.log(pickOfDokumenEdit);

  const handleCloseModal = () => {
    window.my_modal_editDokumen.close();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      judul: pickOfDokumenEdit?.judul || "",
      link: pickOfDokumenEdit?.link || "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);

      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("link", values.link);
      editDataDokumen(
        pickOfDokumenEdit,
        formData,
        values,
        handleEditDokumen,
        notifyEdit,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <div>
      <dialog
        id="my_modal_editDokumen"
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
          <h1 className="text-2xl my-3 mx-auto font-bold">
            Edit Data Pengumuman
          </h1>

          <div className="flex flex-col mb-3">
            <label className="text-xl" htmlFor="judul">
              Judul Pengumuman
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
            <label className="text-xl" htmlFor="link">
              Isi Pengumuman
            </label>
            {formik.errors.link && formik.touched.link && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.link}
              </p>
            )}
            <CKEditor
              editor={ClassicEditor}
              id="link"
              name="link"
              data={formik.values.link}
              onChange={(event, editor) => {
                const data = editor.getData();
                formik.setFieldValue("link", data);
                setEditor(editor);
              }}
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

export default editDokumen;
