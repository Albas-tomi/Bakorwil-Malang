import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { editDataProgram } from "./apiProgram";

const Schema = Yup.object({
  judul: Yup.string().required(),
  deskripsi: Yup.string().required(),
});

const editProgram = ({ pickOfProgramEdit, handleEditProgram }) => {
  const [editor, setEditor] = useState(null);
  const handleCloseModal = () => {
    window.my_modal_editProgram.close();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      judul: pickOfProgramEdit?.judul || "",
      deskripsi: pickOfProgramEdit?.deskripsi || "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);

      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("deskripsi", values.deskripsi);
      editDataProgram(
        pickOfProgramEdit,
        formData,
        values,
        handleEditProgram,
        notifyEdit,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <div>
      <dialog id="my_modal_editProgram" className="modal   backdrop-blur-sm ">
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
          <h1 className="text-2xl my-3 mx-auto font-bold">Edit Data Program</h1>

          <div className="flex flex-col mb-3">
            <label className="text-xl" htmlFor="judul">
              Judul Program
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
          <div className="mb-3 rounded-md">
            <label className="text-xl" htmlFor="deskripsi">
              Isi Program
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

export default editProgram;
