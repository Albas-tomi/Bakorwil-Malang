import Slider from '../components/beranda/Slider';

const Beranda = () => {
  return (
    <div>
      <Slider />
      <div className="pengumuman mt-7 px-5">
        <h1 className="text-xl text-center font-semibold text-second">Pengumuman</h1>
        <div className="card flex flex-row justify-between mt-4">
          <div className="w-[47%] h-40 rounded-md bg-dark"></div>
          <div className="w-[47%] h-40 rounded-md bg-dark"></div>
        </div>
        <div className="berita mt-7 ">
          <h1 className="text-xl text-center font-semibold text-second">Berita Terbaru</h1>
          <div className="flex flex-row justify-between">
            <div className="card card-compact w-[47%] bg-base-100 shadow-xl">
              <figure>
                <img src="https://placehold.co/600x400" alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div className="card card-compact w-[47%] bg-base-100 shadow-xl">
              <figure>
                <img src="https://placehold.co/600x400" alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
