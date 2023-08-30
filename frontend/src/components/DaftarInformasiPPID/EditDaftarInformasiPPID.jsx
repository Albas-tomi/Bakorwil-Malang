import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { editDataDaftarInformasiPPID } from "./apiDaftarInformasiPPID";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Schema = Yup.object({
  judul: Yup.string().required(),
  deskripsi: Yup.string(),
  jenisKategori: Yup.string().required(),
  link: Yup.string().required(),
  kategori: Yup.string().required(),
});

const editDaftarInformasiPPID = ({
  pickOfDaftarInformasiPPIDEdit,
  handleEditDaftarInformasiPPID,
}) => {
  const [editor, setEditor] = useState(null);

  const handleCloseModal = () => {
    window.my_modal_editDaftarInformasiPPID.close();
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      judul: pickOfDaftarInformasiPPIDEdit?.judul || "",
      deskripsi: pickOfDaftarInformasiPPIDEdit?.deskripsi || "",
      jenisKategori: pickOfDaftarInformasiPPIDEdit?.jenisKategori || "",
      link: pickOfDaftarInformasiPPIDEdit?.link || "",
      kategori: pickOfDaftarInformasiPPIDEdit?.kategori || "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);

      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("deskripsi", values.deskripsi);
      formData.append("link", values.link);
      formData.append("jenisKategori", values.jenisKategori);
      formData.append("kategori", values.kategori);
      editDataDaftarInformasiPPID(
        pickOfDaftarInformasiPPIDEdit,
        formData,
        values,
        handleEditDaftarInformasiPPID,
        notifyEdit,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <div>
      <dialog
        id="my_modal_editDaftarInformasiPPID"
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
            Edit Data Daftar Informasi PPID
          </h1>
          <div className="mb-3 rounded-md">
            <div className="mb-3 flex flex-col rounded-md">
              <label className="text-xl" htmlFor="judul">
                judul Dokumen
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
                className="input  input-bordered input-info w-full"
              />
            </div>
          </div>

          <div className="mb-3 rounded-md">
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
              data={formik.values.deskripsi}
              onChange={(event, editor) => {
                const data = editor.getData();
                formik.setFieldValue("deskripsi", data);
                setEditor(editor);
              }}
            />
          </div>
          <div className="mb-3 rounded-md">
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
                className="input  input-bordered input-info w-full"
              />
            </div>
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
              className="input input-bordered input-info px-3 w-full max-w-xs"
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
              <option value="Informasi Serta Merta">
                Informasi Serta Merta
              </option>
              <option value="Informasi Setiap Saat">
                Informasi Setiap Saat
              </option>
              <option value="Buku Pedoman Teknis">Buku Pedoman Teknis</option>
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
    </div>
  );
};

export default editDaftarInformasiPPID;
