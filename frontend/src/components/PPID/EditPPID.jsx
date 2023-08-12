// import { useFormik } from "formik";
// import React, { useState } from "react";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { editDataPPID } from "./apiPPID";

// const Schema = Yup.object({
//   judul: Yup.string().required(),
//   link: Yup.string().required(),
// });

// const editPPID = ({ pickOfPPIDEdit, handleEditPPID }) => {
//   const [editor, setEditor] = useState(null);
//   const handleCloseModal = () => {
//     window.my_modal_editPPID.close();
//   };

//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       judul: pickOfPPIDEdit?.judul || "",
//       link: pickOfPPIDEdit?.link || "",
//     },
//     validationSchema: Schema,
//     onSubmit: async (values) => {
//       const notifyEdit = (message) => toast.success(message);

//       const formData = new FormData();
//       formData.append("judul", values.judul);
//       formData.append("link", values.link);
//       editDataPPID(
//         pickOfPPIDEdit,
//         formData,
//         values,
//         handleEditPPID,
//         notifyEdit,
//         handleCloseModal,
//         formik
//       );
//     },
//   });
//   return (
//     <div>
//       <dialog id="my_modal_editPPID" className="modal   backdrop-blur-sm ">
//         <form
//           method="dialog"
//           data-testid="form"
//           className=" bg-white overflow-y-scroll  px-6 py-3 relative min-w-[600px] max-h-screen max-w-3xl rounded-md z-10"
//           name="form"
//           onSubmit={formik.handleSubmit}
//         >
//           <form
//             method="dialog"
//             className="modal-box shadow-none  w-full bg-white mx-auto"
//           >
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-2">
//               ✕
//             </button>
//           </form>
//           <h1 className="text-2xl my-3 mx-auto font-bold">Edit Data PPID</h1>

//           <div className="flex flex-col mb-3">
//             <label className="text-xl" htmlFor="judul">
//               Judul PPID
//             </label>
//             {formik.errors.judul && formik.touched.judul && (
//               <p className="mt-1 text-red-500 max-[640px]:text-sm">
//                 {formik.errors.judul}
//               </p>
//             )}
//             <input
//               className="input input-bordered input-info w-full "
//               id="judul"
//               name="judul"
//               type="text"
//               onChange={formik.handleChange}
//               value={formik.values.judul}
//             />
//           </div>
//           <div className="mb-3 rounded-md">
//             <label className="text-xl" htmlFor="link">
//               Isi PPID
//             </label>
//             {formik.errors.link && formik.touched.link && (
//               <p className="mt-1 text-red-500 max-[640px]:text-sm">
//                 {formik.errors.link}
//               </p>
//             )}
//             <CKEditor
//               editor={ClassicEditor}
//               id="link"
//               name="link"
//               data={formik.values.link}
//               onChange={(event, editor) => {
//                 const data = editor.getData();
//                 formik.setFieldValue("link", data);
//                 setEditor(editor);
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-green-300 hover:bg-green-800 rounded-md p-2"
//           >
//             Submit
//           </button>
//         </form>
//       </dialog>
//     </div>
//   );
// };

// export default editPPID;
