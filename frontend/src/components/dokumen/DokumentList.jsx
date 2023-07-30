import React, { useEffect, useState } from "react";
import { deleteDokumen, getDokumen } from "../../../getApi";
import AddDokumen from "./AddDokumen";
import { toast } from "react-toastify";
import ConfirmDeleteDokumen from "./ConfirmDeleteDokumen";
import EditDokumen from "./EditDokumen";
const DokumentList = () => {
  const [dataDokumen, setDataDokumen] = useState([]);
  const [pickOfDokumenEdit, setpickOfDokumenEdit] = useState("");

  const [pickIdDelete, setPickIdDelete] = useState("");

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
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {dataDokumen.map((dokumen, idx) => (
              <tr key={dokumen.id}>
                <td>{(idx += 1)}</td>
                <td>{dokumen.judul}</td>
                <td>
                  <div
                    className="line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: dokumen.link,
                    }}
                  />
                </td>
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
