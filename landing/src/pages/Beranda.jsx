import Slider from '../components/beranda/Slider';

const Beranda = () => {
  return (
    <div>
      <Slider />

      {/* Pengumuman */}
      <div className="pengumuman mt-7 px-5">
        <h1 className="text-xl text-center font-semibold text-second">Pengumuman</h1>
        <div className="card flex flex-row gap-5 mt-4">
          <div className="card card-compact w-[46%] bg-base-100 bg-cover rounded-lg overflow-hidden">
            <img src="https://placehold.co/400x400" alt="Shoes" />
          </div>
          <div className="card card-compact w-[46%] bg-base-100 bg-cover rounded-lg overflow-hidden">
            <img src="https://placehold.co/400x400" alt="Shoes" />
          </div>
        </div>

        {/* Berita */}
        <div className="berita mt-7 ">
          <h1 className="text-xl text-center font-semibold text-second">Berita Terbaru</h1>
          <div className="flex flex-row flex-wrap gap-5 mt-4 gap-y-5">
            <div className="card card-compact w-[46%] bg-base-100 shadow-xl">
              <figure>
                <img src="https://placehold.co/600x400" alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div className="card card-compact w-[46%] bg-base-100 shadow-xl">
              <figure>
                <img src="https://placehold.co/600x400" alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?ok</p>
              </div>
            </div>
            <div className="card card-compact w-[46%] bg-base-100 shadow-xl">
              <figure>
                <img src="https://placehold.co/600x400" alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?ok</p>
              </div>
            </div>
            <div className="card card-compact w-[46%] bg-base-100 shadow-xl">
              <figure>
                <img src="https://placehold.co/600x400" alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?ok</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lihat lainnya */}
        <div className="flex justify-center mt-5">
          <button className="btn btn-xs bg-second text-white hover:bg-birumuda capitalize">Lihat Lainnya</button>
        </div>

        {/* Video */}
        <div className="video mt-7">
          <h1 className="text-xl text-center font-semibold text-second">Berita Terbaru</h1>
          {/* <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Beranda;
