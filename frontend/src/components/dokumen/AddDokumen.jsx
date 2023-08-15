import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { addDataDokumen } from "./apiDokumen";
const Schema = Yup.object({
  judul: Yup.string().required(),
  link: Yup.string().required(),
  kategori: Yup.string().required(),
});

const AddDokumen = ({ handleAddDokumen }) => {
  const handleCloseModal = () => {
    window.my_modal_addDokumen.close();
  };

  const formik = useFormik({
    initialValues: {
      judul: "",
      link: "",
      kategori: "",
    },
    ValidationSchema: Schema,

    onSubmit: async (values) => {
      const notifyAddData = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("link", values.link);
      formData.append("kategori", values.kategori);

      addDataDokumen(
        formData,
        values,
        handleAddDokumen,
        notifyAddData,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <dialog id="my_modal_addDokumen" className="modal   backdrop-blur-sm ">
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
        <h1 className="text-2xl my-3 mx-auto font-bold">Tambah Dokumen</h1>

        <div className="flex flex-col mb-3 ">
          <label className="text-xl" htmlFor="judul">
            Nama Dokumen
          </label>
          {formik.errors.judul && formik.touched.judul && (
            <p className="mt-1 text-red-500 max-[640px]:text-sm">
              {formik.errors.judul}
            </p>
          )}
          <input
            className="input  input-bordered input-info w-full"
            id="judul"
            name="judul"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.judul}
          />
        </div>

        <div className="mb-3 flex flex-col rounded-md">
          <label className="text-xl" htmlFor="link">
            Link Dokumen
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
            className="input  input-bordered input-info w-full "
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
            <option value="Rencana Strategis">Rencana Strategis</option>
            <option value="Rencana Kerja">Rencana Kerja</option>
            <option value="Rencana Aksi">Rencana Aksi</option>
            <option value="Indikator Kinerja Utama">
              Indikator Kinerja Utama
            </option>
            <option value="Pohon Kinerja">Pohon Kinerja</option>
            <option value="Perjanjian Kinerja">Perjanjian Kinerja</option>
            <option value="Laporan Kinerja">Laporan Kinerja</option>
            <option value="Evaluasi Internal">Evaluasi Internal</option>
            <option value="Dokumen Teknis">Dokumen Teknis</option>
            <option value="Dokumen PPID">Dokumen PPID</option>
            <option value="Lainnya">Lainnya</option>
            {/* Add more options as needed */}
          </select>
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

export default AddDokumen;
