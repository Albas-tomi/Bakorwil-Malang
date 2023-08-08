import React, { useEffect, useState } from "react";
import AddProgram from "./AddProgram";
import { toast } from "react-toastify";
import ConfirmDeleteProgram from "./ConfirmDeleteProgram";
import EditProgram from "./EditProgram";
import { deleteProgram, getProgram } from "./apiProgram";
import ReactPaginate from "react-paginate";
const ProgramtList = () => {
  const [dataProgram, setDataProgram] = useState([]);
  const [pickOfProgramEdit, setpickOfProgramEdit] = useState("");
  const [pickIdDelete, setPickIdDelete] = useState("");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const ProgramPerPage = 10;

  const pageVisited = pageNumber * ProgramPerPage;
  const pageCount = dataProgram.length / ProgramPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Last Pagination

  useEffect(() => {
    getProgram().then((data) => {
      setDataProgram(data);
    });
  }, []);

  const handleAddProgram = (newProgram) => {
    setDataProgram([...dataProgram, newProgram]);
  };

  const deleteProgramId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deleteProgram(id, setDataProgram, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProgram = (ProgramData) => {
    setpickOfProgramEdit(ProgramData);
    setDataProgram((prevData) =>
      prevData.map((Program) =>
        Program.id === ProgramData.id ? ProgramData : Program
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
              <th className="text-center">Deskripsi</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {dataProgram
              ?.slice(0, dataProgram.length)
              .slice(pageVisited, pageVisited + ProgramPerPage)
              .reverse()
              .map((Program, idx) => (
                <tr key={Program.id}>
                  <td>{pageVisited + idx + 1}</td>
                  <td>{Program.judul}</td>
                  <td>
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: Program.deskripsi,
                      }}
                    />
                  </td>
                  <td className="flex gap-2 justify-center items-center">
                    <button
                      onClick={() => {
                        window.my_modal_confirmDeleteProgram.showModal();
                        setPickIdDelete(Program.id);
                      }}
                      className="btn btn-outline btn-error"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => {
                        handleEditProgram({
                          id: Program.id,
                          judul: Program.judul,
                          deskripsi: Program.deskripsi,
                        });
                        window.my_modal_editProgram.showModal();
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
            pageCount={Math.ceil(dataProgram.length / ProgramPerPage)}
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
      <AddProgram handleAddProgram={handleAddProgram} />
      <ConfirmDeleteProgram
        deleteProgramId={deleteProgramId}
        pickIdDelete={pickIdDelete}
      />
      <EditProgram
        pickOfProgramEdit={pickOfProgramEdit}
        handleEditProgram={handleEditProgram}
      />
    </div>
  );
};

export default ProgramtList;
