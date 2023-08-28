import React, { useEffect, useState } from "react";
import dataPPID from "../../DataPPID.json";
import { getDataDaftarInformasiPPID } from "../../getDataApi";

export const Accordion = () => {
  const [dataDokumenPPID, setDataDokumenPPID] = useState([]);
  useEffect(() => {
    getDataDaftarInformasiPPID().then((data) => {
      setDataDokumenPPID(data);
    });
  }, []);

  // ==================INFORMASI SERTA MERTA ==================
  const informasiBerkala = dataDokumenPPID.filter(
    (kategori) => kategori.kategori === "Informasi Berkala"
  );

  // ==================INFORMASI SERTA MERTA ==================

  // ==================INFORMASI SERTA MERTA ==================
  const informasiSertaMerta = dataDokumenPPID.filter(
    (kategori) => kategori.kategori === "Informasi Serta Merta"
  );

  // ==================INFORMASI SERTA MERTA ==================

  const dataA = dataPPID.filter((kategori) => kategori.kategori === "A");
  const dataB = dataPPID.filter((kategori) => kategori.kategori === "B");
  const dataISM = dataPPID.filter(
    (pages) => pages.pages === "informasi serta merta"
  );
  const dataISS = dataPPID.filter(
    (pages) => pages.pages === "informasi setiap saat"
  );

  return (
    <div id="daftar" section="accordion" className="grid gap-y-4 p-5">
      {/* ================== INFORMASI BERKALA ================== */}
      <div className="collapse collapse-arrow bg-second text-white">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-base font-bold flex items-center gap-2 md:text-lg">
          Informasi Berkala
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table table-xs md:table-md text-sm md:text-base">
              {/* head */}
              <tbody>
                {/* row A */}
                <tr className="font-bold">
                  <th>A</th>
                  <td colSpan="3">Informasi tentang profile Badan Publik :</td>
                </tr>
                {informasiBerkala
                  .filter(
                    (jenisKategori) => jenisKategori.jenisKategori === "A"
                  )
                  .map((dataA, idx) => (
                    <tr key={idx}>
                      <th>{(idx += 1)}</th>
                      <td>{dataA.judul}</td>
                      <td>
                        <a target="_blank" href={dataA.link}>
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                {/* row B */}
                <tr className="font-bold">
                  <th>B</th>
                  <td colSpan="3">
                    Ringkasan informasi tentang program dan/atau kegiatan yang
                    sedang dijalankan dalam lingkup Badan Publik, yang meliputi{" "}
                  </td>
                </tr>
                {informasiBerkala
                  .filter(
                    (jenisKategori) => jenisKategori.jenisKategori === "B"
                  )
                  .map((B, idx) => (
                    <tr key={idx}>
                      <th>{(idx += 1)}</th>
                      <td>{B.judul}</td>
                      <td>
                        <a href={B.link}></a>
                      </td>
                    </tr>
                  ))}
                {/* row C */}
                <tr className="font-bold">
                  <th>C</th>
                  <td colSpan="3">
                    Ringkasan informasi tentang kinerja Badan Publik berupa
                    narasi tentang realisasi kegiatan yang telah maupun sedang
                    dijalankan beserta capaiannya
                  </td>
                </tr>
                {/* row D */}
                <tr className="font-bold">
                  <th>D</th>
                  <td colSpan="3">
                    Ringkasan laporan keuangan, yang meliputi :
                  </td>
                </tr>
                {/* row E */}
                <tr className="font-bold">
                  <th>E</th>
                  <td colSpan="3">Ringkasan laporan akses Informasi Publik</td>
                </tr>
                {/* row F */}
                <tr className="font-bold">
                  <th>F</th>
                  <td colSpan="3">
                    Informasi tentang peraturan, keputusan, dan/atau kebijakan
                    yang mengikat dan/atau berdampak bagi publik yang
                    dikeluarkan oleh Badan Publik
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ================== INFORMASI SERTA MERTA ================== */}
      <div className="collapse collapse-arrow bg-second text-white">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-base font-bold flex items-center gap-2 md:text-lg">
          Informasi Serta Merta
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table table-xs md:table-md">
              {/* head */}
              <tbody>
                <tr className="font-bold">
                  <th>A</th>
                  <td>Informasi tentang profile Badan Publik :</td>
                </tr>
                {informasiSertaMerta.map((ism, idx) => (
                  <tr key={idx}>
                    <th>{(idx += 1)}</th>
                    <td className="flex gap-3 justify-center items-center">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: ism.deskripsi,
                        }}
                      />
                      <a
                        className="font-extrabold text-birumuda"
                        href={ism.link}
                        target="_blank"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ================== INFORMASI SETIAP SAAT ================== */}
      <div className="collapse collapse-arrow bg-second text-white">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-base font-bold flex items-center gap-2 md:text-lg">
          Informasi Setiap Saat
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table table-xs md:table-md">
              {/* head */}
              <tbody>
                <tr className="font-bold">
                  <th>A</th>
                  <td>
                    Setiap Badan Publik wajib menyediakan informasi setiap saat
                    yang sekurang kurangnya terdiri atas:
                  </td>
                </tr>
                {dataISS.map((iss, idx) => (
                  <tr key={idx} className="ml-8">
                    <th>{iss.no}</th>
                    <td>{iss.judul}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
