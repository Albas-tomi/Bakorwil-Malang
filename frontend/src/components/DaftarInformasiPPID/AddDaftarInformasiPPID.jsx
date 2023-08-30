import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { addDataDaftarInformasiPPID } from "./apiDaftarInformasiPPID";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const Schema = Yup.object({
  judul: Yup.string().required(),
  jenisKategori: Yup.string().required(),
  deskripsi: Yup.string(),
  link: Yup.string().required(),
  kategori: Yup.string().required(),
});

const AddDaftarInformasiPPID = ({ handleAddDaftarInformasiPPID }) => {
  const handleCloseModal = () => {
    window.my_modal_addDaftarInformasiPPID.close();
  };
  const formik = useFormik({
    initialValues: {
      judul: "",
      deskripsi: "",
      link: "",
      jenisKategori: "",
      kategori: "",
    },
    ValidationSchema: Schema,

    onSubmit: async (values) => {
      const notifyAddData = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("jenisKategori", values.jenisKategori);
      formData.append("deskripsi", values.deskripsi);
      formData.append("link", values.link);
      formData.append("kategori", values.kategori);

      addDataDaftarInformasiPPID(
        formData,
        values,
        handleAddDaftarInformasiPPID,
        notifyAddData,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <dialog
      id="my_modal_addDaftarInformasiPPID"
      className="modal   backdrop-blur-sm "
    >
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
          Tambah Daftar Informasi PPID
        </h1>

        <div className="mb-3 flex flex-col rounded-md">
          <label className="text-xl" htmlFor="judul">
            Judul
          </label>
          {formik.errors.judul && formik.touched.judul && (
            <p className="mt-1 text-red-500 max-[640px]:text-sm">
              {formik.errors.judul}
            </p>
          )}

          <input
            id="judul"
            name="judul"
            value={formik.values.judul}
            onChange={formik.handleChange}
            type="text"
            className="input  input-bordered input-info w-full "
          />
        </div>

        <div className="mb-3  rounded-md">
          <label className="text-xl" htmlFor="deskripsi">
            Deskripsi Dokumen / Tahun Terbit
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
            value={formik.values.deskripsi}
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
            <option value="Laporan Layanan Informasi dan Dokumentasi">
              Laporan Layanan Informasi dan Dokumentasi
            </option>
            <option value="Daftar Informasi Publik">
              Daftar Informasi Publik
            </option>
            <option value="Surat Keputusan Kepala Bakorwil III Jawa Timur">
              Surat Keputusan Kepala Bakorwil III Jawa Timur
            </option>
            <option value="Informasi Berkala">Informasi Berkala</option>
            <option value="Informasi Serta Merta">Informasi Serta Merta</option>
            <option value="Informasi Setiap Saat">Informasi Setiap Saat</option>
            <option value="Buku Pedoman Teknis">Buku Pedoman Teknis</option>
          </select>
        </div>
        <div className="mb-3 flex flex-col  rounded-md">
          <label className="text-xl" htmlFor="jenisKategori">
            jenis Kategori Dokumen
          </label>
          {formik.errors.jenisKategori && formik.touched.jenisKategori && (
            <p className="mt-1 text-red-500 max-[640px]:text-sm">
              {formik.errors.jenisKategori}
            </p>
          )}

          <select
            id="jenisKategori"
            name="jenisKategori"
            value={formik.values.jenisKategori}
            onChange={formik.handleChange}
            className="input input-bordered input-info w-full max-w-xs"
          >
            <option value="">Pilih jenis Kategori</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="H">H</option>
            <option value="I">I</option>
            <option value="J">J</option>
            <option value="K">K</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="N">N</option>
            <option value="O">O</option>
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

export default AddDaftarInformasiPPID;
