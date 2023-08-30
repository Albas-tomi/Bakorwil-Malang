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

  // ==================INFORMASI BERKALA ==================
  const informasiBerkala = dataDokumenPPID.filter(
    (kategori) => kategori.kategori === "Informasi Berkala"
  );

  // ==================INFORMASI BERKALA ==================

  // ==================INFORMASI SERTA MERTA ==================
  const informasiSertaMerta = dataDokumenPPID.filter(
    (kategori) => kategori.kategori === "Informasi Serta Merta"
  );
  // ==================INFORMASI SETIAP SAAT ==================

  // ==================INFORMASI SETIAP SAAT ==================
  const informasiSetiapSaat = dataDokumenPPID.filter(
    (kategori) => kategori.kategori === "Informasi Setiap Saat"
  );
  // ==================INFORMASI SERTA MERTA ==================

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
                        <a
                          className="text-birumuda"
                          target="_blank"
                          href={dataA.link}
                        >
                          <p
                            dangerouslySetInnerHTML={{
                              __html: dataA.deskripsi,
                            }}
                          />
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
                        <a
                          className="text-birumuda"
                          target="_blank"
                          href={B.link}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: B.deskripsi.substring(0, 70),
                            }}
                          />
                        </a>
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
                {informasiBerkala
                  .filter(
                    (jenisKategori) => jenisKategori.jenisKategori === "C"
                  )
                  .map((C, idx) => (
                    <tr key={idx}>
                      <th>{(idx += 1)}</th>
                      <td>{C.judul}</td>
                      <td>
                        <a
                          className="text-birumuda"
                          target="_blank"
                          href={C.link}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: C.deskripsi.substring(0, 70),
                            }}
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                {/* row D */}
                <tr className="font-bold">
                  <th>D</th>
                  <td colSpan="3">
                    Ringkasan laporan keuangan, yang meliputi :
                  </td>
                </tr>
                {informasiBerkala
                  .filter(
                    (jenisKategori) => jenisKategori.jenisKategori === "D"
                  )
                  .map((C, idx) => (
                    <tr key={idx}>
                      <th>{(idx += 1)}</th>
                      <td>{C.judul}</td>
                      <td>
                        <a
                          className="text-birumuda"
                          target="_blank"
                          href={C.link}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: C.deskripsi.substring(0, 70),
                            }}
                          />
                        </a>
                      </td>
                    </tr>
                  ))}

                {/* row E */}
                <tr className="font-bold">
                  <th>E</th>
                  <td colSpan="3">Ringkasan laporan akses Informasi Publik</td>
                </tr>
                {informasiBerkala
                  .filter(
                    (jenisKategori) => jenisKategori.jenisKategori === "E"
                  )
                  .map((C, idx) => (
                    <tr key={idx}>
                      <th>{(idx += 1)}</th>
                      <td>{C.judul}</td>
                      <td>
                        <a
                          className="text-birumuda"
                          target="_blank"
                          href={C.link}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: C.deskripsi.substring(0, 70),
                            }}
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                {/* row F */}
                <tr className="font-bold">
                  <th>F</th>
                  <td colSpan="3">
                    Informasi tentang peraturan, keputusan, dan/atau kebijakan
                    yang mengikat dan/atau berdampak bagi publik yang
                    dikeluarkan oleh Badan Publik
                  </td>
                </tr>
                {informasiBerkala
                  .filter(
                    (jenisKategori) => jenisKategori.jenisKategori === "F"
                  )
                  .map((C, idx) => (
                    <tr key={idx}>
                      <th>{(idx += 1)}</th>
                      <td>{C.judul}</td>
                      <td>
                        <a
                          className="text-birumuda"
                          target="_blank"
                          href={C.link}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: C.deskripsi.substring(0, 70),
                            }}
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
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
              <tbody>
                {/* Row A*/}
                <tr className="font-bold">
                  <th>A</th>
                  <td>Informasi tentang profile Badan Publik :</td>
                </tr>
                {informasiSertaMerta
                  .filter(
                    (jenisKategori) => jenisKategori.jenisKategori === "A"
                  )
                  .map((C, idx) => (
                    <tr key={idx}>
                      <th>{(idx += 1)}</th>
                      <td>{C.judul}</td>
                      <td>
                        <a
                          className="text-birumuda"
                          target="_blank"
                          href={C.link}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: C.deskripsi.substring(0, 70),
                            }}
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                {/* row B */}
                <tr className="font-bold">
                  <th>B</th>
                  <th>
                    Informasi yang dapat mengancam hajat hidup orang banyak dan
                    ketertiban umum sebagaimana dimaksud pada ayat (1) meliputi
                    antara lain
                  </th>
                </tr>
                {informasiSertaMerta
                  .filter(
                    (jenisKategori) => jenisKategori.jenisKategori === "B"
                  )
                  .map((C, idx) => (
                    <tr key={idx}>
                      <th>{(idx += 1)}</th>
                      <td>{C.judul}</td>
                      <td>
                        <a
                          className="text-birumuda"
                          target="_blank"
                          href={C.link}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: C.deskripsi.substring(0, 70),
                            }}
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                {/* row C */}
                <tr className="font-bold">
                  <th>C</th>
                  <th>
                    Standar pengumuman informasi sebagaimana dimaksud pada ayat
                    (1) sekurang kurangnya meliputi :
                  </th>
                </tr>
                {informasiSertaMerta
                  .filter(
                    (jenisKategori) => jenisKategori.jenisKategori === "C"
                  )
                  .map((C, idx) => (
                    <tr key={idx}>
                      <th>{(idx += 1)}</th>
                      <td>{C.judul}</td>
                      <td>
                        <a
                          className="text-birumuda"
                          target="_blank"
                          href={C.link}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: C.deskripsi.substring(0, 70),
                            }}
                          />
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
              {/* Row A */}
              <tbody>
                <tr className="font-bold">
                  <th></th>
                  <th>
                    Setiap Badan Publik wajib menyediakan informasi setiap saat
                    yang sekurang kurangnya terdiri atas:
                  </th>
                </tr>
                {informasiSetiapSaat.map((C, idx) => (
                  <tr key={idx}>
                    <th>{(idx += 1)}</th>
                    <td>{C.judul}</td>
                    <td>
                      <a
                        className="text-birumuda"
                        target="_blank"
                        href={C.link}
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: C.deskripsi.substring(0, 70),
                          }}
                        />
                      </a>
                    </td>
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
