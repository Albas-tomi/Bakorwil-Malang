import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EditPengumuman from "./EditProduct";
import AddPengumuman from "./AddPengumuman";

const PengumumanList = () => {
  const [dataPengumuman, setDataPengumuman] = useState([]);
  const [idPengumumanEdit, setIdPengumumanEdit] = useState("");
  const urlImg = "http://localhost:4000/pengumumanImg/";

  // ================= RETRIEVE DATA ULANG =============
  useEffect(() => {
    getPengumuman();
  }, []);
  // ================= LAST RETRIEVE DATA ULANG =============

  // ================ GET DATA BE ======================
  const getPengumuman = async () => {
    const res = await axios.get("http://localhost:4000/pengumuman");
    setDataPengumuman(res.data);
  };
  // ================ LAST GET DATA BE ======================

  //================DELETE DATA ========================
  const deletePengumuman = async (id) => {
    const notifyDelete = (message) => toast.success(message);

    try {
      await axios.delete(`http://localhost:4000/pengumuman/${id}`);
      getPengumuman();
      notifyDelete("Data Berhasil Dihapus!");
    } catch (error) {
      console.log("Ga iso ndk download data e");
    }
  };
  //================LAST DELETE DATA ========================

  //  ===============EDIT DATA=====================
  const handleEdit = (pengumumanData) => {
    setIdPengumumanEdit(pengumumanData);
    // =============== RETRIEVE DATA ULANG SETELAH DI EDIT ===============
    setDataPengumuman(
      (prevData) =>
        prevData.map((pengumuman) =>
          pengumuman.id === pengumumanData.id ? pengumumanData : pengumuman
        )
      // =============== RETRIEVE DATA ULANG SETELAH DI EDIT ===============
    );
  };
  //  ================= LAST EDIT DATA=====================

  //  =================HANDLE ADD DATA & RETRIEVE DATA ULANG =====================
  const handleAddPengumuman = (newPengumuman) => {
    setDataPengumuman([...dataPengumuman, newPengumuman]);
  };
  //  ================= LAST HANDLE ADD DATA & RETRIEVE DATA ULANG ===============

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
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
                      deletePengumuman(pengumuman.id);
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
