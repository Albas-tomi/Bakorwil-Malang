import React, { useEffect, useState } from "react";
import AddPejabat from "./AddPejabat";
import { toast } from "react-toastify";
import ConfirmDeletePejabat from "./ConfirmDeletePejabat";
import EditPejabat from "./EditPejabat";
import { deletePejabat, getPejabat } from "./apiPejabat";
import ReactPaginate from "react-paginate";
const PejabatList = () => {
  const [dataPejabat, setDataPejabat] = useState([]);
  const [pickOfPejabatEdit, setpickOfPejabatEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const PejabatPerPage = 10;

  const pageVisited = pageNumber * PejabatPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Last Pagination

  useEffect(() => {
    getPejabat().then((data) => {
      setDataPejabat(data);
    });
  }, []);

  const handleAddPejabat = (newPejabat) => {
    setDataPejabat([...dataPejabat, newPejabat]);
  };

  const deletePejabatId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deletePejabat(id, setDataPejabat, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPejabat = (PejabatData) => {
    setpickOfPejabatEdit(PejabatData);
    setDataPejabat((prevData) =>
      prevData.map((Pejabat) =>
        Pejabat.id === PejabatData.id ? PejabatData : Pejabat
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
              <th className="text-center">Nama</th>
              <th className="text-center">Jabatan</th>
              <th className="text-center">Kategori</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {dataPejabat
              ?.slice(0, dataPejabat.length)
              .slice(pageVisited, pageVisited + PejabatPerPage)
              .reverse()
              .map((Pejabat, idx) => (
                <tr key={Pejabat.id}>
                  <td>{pageVisited + idx + 1}</td>
                  <td>{Pejabat.nama}</td>
                  <td>{Pejabat.jabatan}</td>
                  <td>{Pejabat.kategori}</td>
                  <td className="flex gap-2 justify-center items-center">
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeletePejabat.showModal();
                        setPickIdDelete(Pejabat.id);
                      }}
                      className="btn btn-outline btn-error"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => {
                        handleEditPejabat({
                          id: Pejabat.id,
                          nama: Pejabat.nama,
                          jabatan: Pejabat.jabatan,
                          kategori: Pejabat.kategori,
                        });
                        window.my_modal_editPejabat.showModal();
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
            pageCount={Math.ceil(dataPejabat.length / PejabatPerPage)}
            onPageChange={changePage}
            marginPagesDisplayed={2}
            containerClassName={"paginationBttns"}
            previousjabatanClassName={"previousBttn"}
            activeClassName={"paginationActivate"}
            nextjabatanClassName={"nextBttn"}
            disabledjabatanClassName={"paginationDisabled"}
          />
        </div>
      </div>
      <AddPejabat handleAddPejabat={handleAddPejabat} />
      <ConfirmDeletePejabat
        deletePejabatId={deletePejabatId}
        pickIdDelete={pickIdDelete}
      />
      <EditPejabat
        pickOfPejabatEdit={pickOfPejabatEdit}
        handleEditPejabat={handleEditPejabat}
      />
    </div>
  );
};

export default PejabatList;
