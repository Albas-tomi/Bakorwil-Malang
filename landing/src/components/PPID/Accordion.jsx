import React from "react";
import dataPPID from "../../DataPPID.json";

export const Accordion = () => {
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
                {dataA.map((A, idx) => (
                  <tr key={idx}>
                    <th>{A.no}</th>
                    <td>{A.judul}</td>
                    <td>
                      <a href={A.link}>{A.direct}</a>
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
                {dataB.map((B, idx) => (
                  <tr key={idx}>
                    <th>{B.no}</th>
                    <td>{B.judul}</td>
                    <td>
                      <a href={B.link}>{B.direct}</a>
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
                {dataISM.map((ism, idx) => (
                  <tr key={idx}>
                    <th>{ism.no}</th>
                    <td>{ism.judul}</td>
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
