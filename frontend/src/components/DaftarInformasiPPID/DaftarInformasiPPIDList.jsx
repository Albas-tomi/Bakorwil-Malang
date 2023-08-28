import React, { useEffect, useState } from "react";
import AddDaftarInformasiPPID from "./AddDaftarInformasiPPID";
import { toast } from "react-toastify";
import ConfirmDeleteDaftarInformasiPPID from "./ConfirmDeleteDaftarInformasiPPID";
import EditDaftarInformasiPPID from "./EditDaftarInformasiPPID";
import {
  deleteDaftarInformasiPPID,
  getDaftarInformasiPPID,
} from "./apiDaftarInformasiPPID";
import ReactPaginate from "react-paginate";

const DaftarInformasiPPIDList = () => {
  const [dataDaftarInformasiPPID, setDataDaftarInformasiPPID] = useState([]);
  const [pickOfDaftarInformasiPPIDEdit, setpickOfDaftarInformasiPPIDEdit] =
    useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const DaftarInformasiPPIDPerPage = 10;

  const pageVisited = pageNumber * DaftarInformasiPPIDPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Last Pagination

  useEffect(() => {
    getDaftarInformasiPPID().then((data) => {
      setDataDaftarInformasiPPID(data);
    });
  }, []);

  const handleAddDaftarInformasiPPID = (newDaftarInformasiPPID) => {
    setDataDaftarInformasiPPID([
      ...dataDaftarInformasiPPID,
      newDaftarInformasiPPID,
    ]);
  };

  const deleteDaftarInformasiPPIDId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteDaftarInformasiPPID(
        id,
        setDataDaftarInformasiPPID,
        notifyDelete
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditDaftarInformasiPPID = (DaftarInformasiPPIDData) => {
    setpickOfDaftarInformasiPPIDEdit(DaftarInformasiPPIDData);
    setDataDaftarInformasiPPID((prevData) =>
      prevData.map((DaftarInformasiPPID) =>
        DaftarInformasiPPID.id === DaftarInformasiPPIDData.id
          ? DaftarInformasiPPIDData
          : DaftarInformasiPPID
      )
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Nomor</th>
              <th className="text-center">Judul</th>
              <th className="text-center">deskripsi</th>
              <th className="text-center">Jenis kategori</th>
              <th className="text-center">Link</th>
              <th className="text-center">Kategori</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {dataDaftarInformasiPPID
              ?.slice(0, dataDaftarInformasiPPID.length)
              .slice(pageVisited, pageVisited + DaftarInformasiPPIDPerPage)
              .reverse()
              .map((DaftarInformasiPPID, idx) => (
                <tr key={DaftarInformasiPPID.id}>
                  <td>{pageVisited + idx + 1}</td>
                  <td>{DaftarInformasiPPID.judul}</td>
                  <td>
                    {" "}
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: DaftarInformasiPPID.deskripsi,
                      }}
                    />
                  </td>
                  <td>{DaftarInformasiPPID.jenisKategori}</td>
                  <td>
                    <a
                      className="text-blue-600"
                      target="_blank"
                      href={DaftarInformasiPPID.link}
                    >
                      {DaftarInformasiPPID.judul}
                    </a>
                  </td>
                  <td>{DaftarInformasiPPID.kategori}</td>
                  <td className="flex gap-2 justify-center items-center">
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeleteDaftarInformasiPPID.showModal();
                        setPickIdDelete(DaftarInformasiPPID.id);
                      }}
                      className="btn btn-outline btn-error"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => {
                        handleEditDaftarInformasiPPID({
                          id: DaftarInformasiPPID.id,
                          judul: DaftarInformasiPPID.judul,
                          deskripsi: DaftarInformasiPPID.deskripsi,
                          link: DaftarInformasiPPID.link,
                          jenisKategori: DaftarInformasiPPID.jenisKategori,
                          kategori: DaftarInformasiPPID.kategori,
                        });
                        window.my_modal_editDaftarInformasiPPID.showModal();
                      }}
                      className="btn btn-outline btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="w-full flex justify-end shadow-md bg-whiterounded-md h-14 p-4 items-center">
          <ReactPaginate
            className="flex gap-4"
            previousLabel={"< Prev"}
            nextLabel={"Next >"}
            pageCount={Math.ceil(
              dataDaftarInformasiPPID.length / DaftarInformasiPPIDPerPage
            )}
            onPageChange={changePage}
            marginPagesDisplayed={2}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            activeClassName={"paginationActivate"}
            nextLinkClassName={"nextBttn"}
            disabledLinkClassName={"paginationDisabled"}
          />
        </div>
      </div>
      <AddDaftarInformasiPPID
        handleAddDaftarInformasiPPID={handleAddDaftarInformasiPPID}
      />
      <ConfirmDeleteDaftarInformasiPPID
        deleteDaftarInformasiPPIDId={deleteDaftarInformasiPPIDId}
        pickIdDelete={pickIdDelete}
      />
      <EditDaftarInformasiPPID
        pickOfDaftarInformasiPPIDEdit={pickOfDaftarInformasiPPIDEdit}
        handleEditDaftarInformasiPPID={handleEditDaftarInformasiPPID}
      />
    </div>
  );
};

export default DaftarInformasiPPIDList;
