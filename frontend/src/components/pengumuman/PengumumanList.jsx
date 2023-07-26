import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EditPengumuman from "./EditProduct";
import AddPengumuman from "./AddPengumuman";
import { deletePengumuman, getPengumuman } from "../../../getApi";

const PengumumanList = () => {
  const [dataPengumuman, setDataPengumuman] = useState([]);
  const [idPengumumanEdit, setIdPengumumanEdit] = useState("");
  const urlImg = "http://localhost:4000/pengumumanImg/";

  useEffect(() => {
    getPengumuman().then((data) => {
      setDataPengumuman(data);
    });
  }, []);

  const deletePengumumanId = async (id) => {
    const notifyDelete = (message) => toast.success(message);
    try {
      await deletePengumuman(id, setDataPengumuman, notifyDelete);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (pengumumanData) => {
    setIdPengumumanEdit(pengumumanData);
    setDataPengumuman((prevData) =>
      prevData.map((pengumuman) =>
        pengumuman.id === pengumumanData.id ? pengumumanData : pengumuman
      )
    );
  };

  const handleAddPengumuman = (newPengumuman) => {
    setDataPengumuman([...dataPengumuman, newPengumuman]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-base-200">
            <tr>
              <th className="text-center">Nomor</th>
              <th className="text-center">Judul</th>
              <th className="text-center">Isi Pengumuman</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataPengumuman.map((pengumuman, idx) => (
              <tr key={pengumuman.id}>
                <td>{(idx += 1)}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          className="w-24"
                          src={`${urlImg}${pengumuman.gambar}`}
                          alt="gambar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{pengumuman.judul}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    className="line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: pengumuman.deskripsi,
                    }}
                  />
                </td>
                <td className="flex gap-2 justify-center items-center">
                  <button
                    onClick={() => {
                      deletePengumumanId(pengumuman.id);
                    }}
                    className="btn btn-outline btn-error"
                  >
                    Hapus
                  </button>
                  <button
                    onClick={() => {
                      handleEdit({
                        id: pengumuman.id,
                        judul: pengumuman.judul,
                        deskripsi: pengumuman.deskripsi,
                        gambar: pengumuman.gambar,
                      });
                      window.my_modal_edit.showModal();
                    }}
                    className="btn btn-outline btn-warning"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>

      <AddPengumuman handleAddPengumuman={handleAddPengumuman} />
      <EditPengumuman
        idPengumumanEdit={idPengumumanEdit}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default PengumumanList;
