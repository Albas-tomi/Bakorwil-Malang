import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { addDataPejabat } from "./apiPejabat";
const Schema = Yup.object({
  nama: Yup.string().required(),
  jabatan: Yup.string().required(),
  kategori: Yup.string().required(),
});

const AddPejabat = ({ handleAddPejabat }) => {
  const handleCloseModal = () => {
    window.my_modal_addPejabat.close();
  };

  const formik = useFormik({
    initialValues: {
      nama: "",
      jabatan: "",
      kategori: "",
    },
    ValidationSchema: Schema,

    onSubmit: async (values) => {
      const notifyAddData = (message) => toast.success(message);
      const formData = new FormData();
      formData.append("nama", values.nama);
      formData.append("jabatan", values.jabatan);
      formData.append("kategori", values.kategori);

      addDataPejabat(
        formData,
        values,
        handleAddPejabat,
        notifyAddData,
        handleCloseModal,
        formik
      );
    },
  });
  return (
    <dialog id="my_modal_addPejabat" className="modal   backdrop-blur-sm ">
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
        <h1 className="text-2xl my-3 mx-auto font-bold">Tambah Pejabat</h1>

        <div className="flex flex-col mb-3 ">
          <label className="text-xl" htmlFor="nama">
            Nama Pejabat
          </label>
          {formik.errors.nama && formik.touched.nama && (
            <p className="mt-1 text-red-500 max-[640px]:text-sm">
              {formik.errors.nama}
            </p>
          )}
          <input
            className="input  input-bordered input-info w-full"
            id="nama"
            name="nama"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nama}
          />
        </div>
        <div className="flex flex-col mb-3 ">
          <label className="text-xl" htmlFor="jabatan">
            Jabatan Pejabat
          </label>
          {formik.errors.jabatan && formik.touched.jabatan && (
            <p className="mt-1 text-red-500 max-[640px]:text-sm">
              {formik.errors.jabatan}
            </p>
          )}
          <input
            className="input  input-bordered input-info w-full"
            id="jabatan"
            name="jabatan"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.jabatan}
          />
        </div>
        <div className="mb-3 flex flex-col  rounded-md">
          <label className="text-xl" htmlFor="kategori">
            Kategori Pejabat
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

            <option value="PNS">PNS</option>
            <option value="PTT-PK">PTT-PK</option>
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

export default AddPejabat;
