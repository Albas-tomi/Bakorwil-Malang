import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Schema = Yup.object({
  title: Yup.string().required(),
  content: Yup.string().required(),
  file: Yup.string().required(),
});

const AddPengumuman = ({ handleAddPengumuman }) => {
  const handleCloseModal = () => {
    window.my_modal_add.close();
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      file: "",
    },
    validationSchema: Schema,

    onSubmit: async (values) => {
      const notifyAddData = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", values.content);
      formData.append("file", values.file);
      try {
        await axios.post("http://localhost:5000/pengumuman", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        handleAddPengumuman({
          title: values.title,
          content: values.content,
          img: values.file,
        });
        notifyAddData("Data berhasil ditambahkan!");
        // window.location.reload();
        handleCloseModal();
        formik.resetForm();
      } catch (error) {
        console.log("Error submitting form:", error);
      }
    },
  });
  return (
    <dialog id="my_modal_add" className="modal overflow-y-visible  bg-black/50">
      <form
        method="dialog"
        data-testid="form"
        className=" bg-white overflow-scroll p-6  max-h-screen  rounded-md z-10"
        name="form"
        onSubmit={formik.handleSubmit}
      >
        <h1>Add Data Pengumuman</h1>

        <form method="dialog" className="modal-box shadow-none ">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col mb-3 ">
          <label className="text-xl" htmlFor="title">
            Judul Pengumuman
          </label>
          {formik.errors.title && formik.touched.title && (
            <p className="mt-1 text-red-500 max-[640px]:text-sm">
              {formik.errors.title}
            </p>
          )}
          <input
            className="input  input-bordered input-info w-full max-w-xs"
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>

        <div className="mb-3  rounded-md">
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
            type="text"
            onChange={(event, editor) => {
              const data = editor.getData();
              formik.setFieldValue("content", data);
            }}
            value={formik.values.title}
          />

          <input
            id="content"
            name="content"
            value={formik.values.content}
            onChange={formik.handleChange}
            type="text"
            className="input hidden input-bordered input-info w-full max-w-xs"
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
            onChange={(e) => formik.setFieldValue("file", e.target.files[0])}
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
  );
};

export default AddPengumuman;
