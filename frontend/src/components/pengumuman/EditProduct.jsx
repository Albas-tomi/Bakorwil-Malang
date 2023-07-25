import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// ==============TO VALIDATE INPUT ==============
const Schema = Yup.object({
  title: Yup.string().required(),
  content: Yup.string().required(),
  file: Yup.string().required(),
});
// ==============TO VALIDATE INPUT ==============

const EditPengumuman = ({ idPengumumanEdit, handleEdit }) => {
  const [editor, setEditor] = useState(null);
  const [preview, setPreview] = useState("");

  // ===========TO GET IMG filename =============
  const loadImage = (e) => {
    const image = e.target.files[0];
    setPreview(URL.createObjectURL(image));
  };

  // ============ TO CLOSE MODAL ================
  const handleCloseModal = () => {
    window.my_modal_edit.close();
  };
  // ============= TO CLOSE MODAL ===============

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: idPengumumanEdit?.title || "",
      content: idPengumumanEdit?.content || "",
      file: idPengumumanEdit?.file || "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", values.content);
      formData.append("file", values.file);
      try {
        await axios.patch(
          `http://localhost:5000/pengumuman/${idPengumumanEdit.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        handleEdit({
          id: idPengumumanEdit.id,
          title: values.title,
          content: values.content,
          img: values.file,
        });
        notifyEdit("Data Berhasil Di edit!");
        window.location.reload();
        handleCloseModal();
        formik.resetForm();
      } catch (error) {
        console.log("Error submitting form:", error);
      }
    },
  });
  return (
    <div>
      <dialog
        id="my_modal_edit"
        className="modal overflow-y-visible bg-black/50"
      >
        <form
          data-testid="form"
          className=" bg-white overflow-scroll p-6  max-h-screen rounded-md z-10"
          name="form"
          onSubmit={formik.handleSubmit}
        >
          <h1>Edit Data Pengumuman</h1>

          <form method="dialog" className="modal-box shadow-none bg-blue-200 ">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col mb-3">
            <label className="text-xl" htmlFor="title">
              Judul Pengumuman
            </label>
            {formik.errors.title && formik.touched.title && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.title}
              </p>
            )}
            <input
              className="input input-bordered input-info w-full max-w-xs"
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>
          <div className="mb-3 rounded-md">
            <label className="text-xl" htmlFor="content">
              Isi Pengumuman
            </label>
            {formik.errors.content && formik.touched.content && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.content}
              </p>
            )}
            <CKEditor
              editor={ClassicEditor}
              id="content"
              name="content"
              data={formik.values.content}
              onChange={(event, editor) => {
                const data = editor.getData();
                formik.setFieldValue("content", data);
                setEditor(editor);
              }}
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="text-xl" htmlFor="file">
              Image Pengumuman
            </label>
            {formik.errors.file && formik.touched.file && (
              <p className="mt-1 text-red-500 max-[640px]:text-sm">
                {formik.errors.file}
              </p>
            )}
            <input
              type="file"
              id="file"
              accept=".jpg,.jpeg,.png"
              name="file"
              onChange={(e) => {
                formik.setFieldValue("file", e.target.files[0]);
                loadImage();
              }}
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
            />
          </div>

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} className="h-20 w-20" alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}
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

export default EditPengumuman;
