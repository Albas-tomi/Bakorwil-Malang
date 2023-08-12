// import React, { useEffect, useState } from "react";
// import AddPPID from "./AddPPID";
// import { toast } from "react-toastify";
// import ConfirmDeletePPID from "./ConfirmDeletePPID";
// import EditPPID from "./EditPPID";
// import { deletePPID, getPPID } from "./apiPPID";
// import ReactPaginate from "react-paginate";
// const PPIDList = () => {
//   const [dataPPID, setDataPPID] = useState([]);
//   const [pickOfPPIDEdit, setpickOfPPIDEdit] = useState("");
//   const [pickIdDelete, setPickIdDelete] = useState("");

//   // Pagination
//   const [pageNumber, setPageNumber] = useState(0);
//   const PPIDPerPage = 10;

//   const pageVisited = pageNumber * PPIDPerPage;
//   const pageCount = dataPPID.length / PPIDPerPage;
//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   // Last Pagination

//   useEffect(() => {
//     getPPID().then((data) => {
//       setDataPPID(data);
//     });
//   }, []);

//   const handleAddPPID = (newPPID) => {
//     setDataPPID([...dataPPID, newPPID]);
//   };

//   const deletePPIDId = async (id) => {
//     const notifyDelete = (message) => toast.success(message);
//     try {
//       await deletePPID(id, setDataPPID, notifyDelete);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleEditPPID = (PPIDData) => {
//     setpickOfPPIDEdit(PPIDData);
//     setDataPPID((prevData) =>
//       prevData.map((PPID) => (PPID.id === PPIDData.id ? PPIDData : PPID))
//     );
//   };

//   return (
//     <div className="flex flex-col gap-2">
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th className="text-center">Nomor</th>
//               <th className="text-center">Judul</th>
//               <th className="text-center">Link</th>
//               <th className="text-center">Aksi</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//             {dataPPID
//               ?.slice(0, dataPPID.length)
//               .slice(pageVisited, pageVisited + PPIDPerPage)
//               .reverse()
//               .map((PPID, idx) => (
//                 <tr key={PPID.id}>
//                   <td>{pageVisited + idx + 1}</td>
//                   <td>{PPID.judul}</td>
//                   <td>
//                     <div
//                       className="line-clamp-2"
//                       dangerouslySetInnerHTML={{
//                         __html: PPID.link,
//                       }}
//                     />
//                   </td>
//                   <td className="flex gap-2 justify-center items-center">
//                     <button
//                       onClick={() => {
//                         window.my_modal_confirmDeletePPID.showModal();
//                         setPickIdDelete(PPID.id);
//                       }}
//                       className="btn btn-outline btn-error"
//                     >
//                       Hapus
//                     </button>
//                     <button
//                       onClick={() => {
//                         handleEditPPID({
//                           id: PPID.id,
//                           judul: PPID.judul,
//                           link: PPID.link,
//                         });
//                         window.my_modal_editPPID.showModal();
//                       }}
//                       className="btn btn-outline btn-warning"
//                     >
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//         <div className="w-full flex justify-end shadow-md bg-whiterounded-md h-14 p-4 items-center">
//           <ReactPaginate
//             className="flex gap-4"
//             previousLabel={"< Prev"}
//             nextLabel={"Next >"}
//             pageCount={Math.ceil(dataPPID.length / PPIDPerPage)}
//             onPageChange={changePage}
//             marginPagesDisplayed={2}
//             containerClassName={"paginationBttns"}
//             previousLinkClassName={"previousBttn"}
//             activeClassName={"paginationActivate"}
//             nextLinkClassName={"nextBttn"}
//             disabledLinkClassName={"paginationDisabled"}
//           />
//         </div>
//       </div>
//       <AddPPID handleAddPPID={handleAddPPID} />
//       <ConfirmDeletePPID
//         deletePPIDId={deletePPIDId}
//         pickIdDelete={pickIdDelete}
//       />
//       <EditPPID
//         pickOfPPIDEdit={pickOfPPIDEdit}
//         handleEditPPID={handleEditPPID}
//       />
//     </div>
//   );
// };

// export default PPIDList;
