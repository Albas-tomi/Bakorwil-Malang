import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { editDataDaftarInformasiPPID } from "./apiDaftarInformasiPPID";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Schema = Yup.object({
  deskripsi: Yup.string().required(),
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
      deskripsi: pickOfDaftarInformasiPPIDEdit?.deskripsi || "",
      link: pickOfDaftarInformasiPPIDEdit?.link || "",
      kategori: pickOfDaftarInformasiPPIDEdit?.kategori || "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      const notifyEdit = (message) => toast.success(message);

      const formData = new FormData();
      formData.append("deskripsi", values.deskripsi);
      formData.append("link", values.link);
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
          <div className="mb-3 rounded-md">
            <div className="mb-3 flex flex-col rounded-md">
              <label className="text-xl" htmlFor="link">
                Link DaftarInformasiPPID
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
            <label className="text-xl" htmlFor="kategori">
              Kategori DaftarInformasiPPID
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
              <option value="DaftarInformasiPPID Teknis">
                DaftarInformasiPPID Teknis
              </option>
              <option value="DaftarInformasiPPID PPID">
                DaftarInformasiPPID PPID
              </option>
              <option value="Pengukuran Kinerja">Pengukuran Kinerja</option>
              <option value="Reformasi Birokrasi">Reformasi Birokrasi</option>
              <option value="Lainnya">Lainnya</option>
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
