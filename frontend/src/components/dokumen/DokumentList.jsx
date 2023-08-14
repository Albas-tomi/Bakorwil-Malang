import React, { useEffect, useState } from "react";
import AddDokumen from "./AddDokumen";
import { toast } from "react-toastify";
import ConfirmDeleteDokumen from "./ConfirmDeleteDokumen";
import EditDokumen from "./EditDokumen";
import { deleteDokumen, getDokumen } from "./apiDokumen";
import ReactPaginate from "react-paginate";
const DokumentList = () => {
  const [dataDokumen, setDataDokumen] = useState([]);
  const [pickOfDokumenEdit, setpickOfDokumenEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const DokumenPerPage = 10;

  const pageVisited = pageNumber * DokumenPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Last Pagination

  useEffect(() => {
    getDokumen().then((data) => {
      setDataDokumen(data);
    });
  }, []);

  const handleAddDokumen = (newDokumen) => {
    setDataDokumen([...dataDokumen, newDokumen]);
  };

  const deleteDokumenId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteDokumen(id, setDataDokumen, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditDokumen = (dokumenData) => {
    setpickOfDokumenEdit(dokumenData);
    setDataDokumen((prevData) =>
      prevData.map((dokumen) =>
        dokumen.id === dokumenData.id ? dokumenData : dokumen
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
              <th className="text-center">Link</th>
              <th className="text-center">Kategori</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {dataDokumen
              ?.slice(0, dataDokumen.length)
              .slice(pageVisited, pageVisited + DokumenPerPage)
              .reverse()
              .map((dokumen, idx) => (
                <tr key={dokumen.id}>
                  <td>{pageVisited + idx + 1}</td>
                  <td>{dokumen.judul}</td>
                  <td>
                    <a
                      className="text-blue-600"
                      target="_blank"
                      href={dokumen.link}
                    >
                      {dokumen.judul}
                    </a>
                  </td>
                  <td>{dokumen.kategori}</td>
                  <td className="flex gap-2 justify-center items-center">
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeleteDokumen.showModal();
                        setPickIdDelete(dokumen.id);
                      }}
                      className="btn btn-outline btn-error"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => {
                        handleEditDokumen({
                          id: dokumen.id,
                          judul: dokumen.judul,
                          link: dokumen.link,
                          kategori: dokumen.kategori,
                        });
                        window.my_modal_editDokumen.showModal();
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
            pageCount={Math.ceil(dataDokumen.length / DokumenPerPage)}
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
      <AddDokumen handleAddDokumen={handleAddDokumen} />
      <ConfirmDeleteDokumen
        deleteDokumenId={deleteDokumenId}
        pickIdDelete={pickIdDelete}
      />
      <EditDokumen
        pickOfDokumenEdit={pickOfDokumenEdit}
        handleEditDokumen={handleEditDokumen}
      />
    </div>
  );
};

export default DokumentList;
