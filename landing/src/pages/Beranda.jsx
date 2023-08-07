import Slider from '../components/beranda/Slider';

const Beranda = () => {
  return (
    <div>
      <Slider />

      {/* Pengumuman */}
      <div className="pengumuman mt-10 px-5">
        <h1 className="text-xl md:text-2xl text-center font-semibold text-second">Pengumuman</h1>
        <div className="card flex flex-row gap-5 justify-center mt-4">
          <div className="card card-compact w-[46%] bg-base-100 bg-cover rounded-lg overflow-hidden">
            <img src="https://placehold.co/400x400" alt="Shoes" />
          </div>
          <div className="card card-compact w-[46%] bg-base-100 bg-cover rounded-lg overflow-hidden">
            <img src="https://placehold.co/400x400" alt="Shoes" />
          </div>
        </div>
      </div>

      {/* Berita */}
      <div className="berita mt-10 px-5">
        <h1 className="text-xl md:text-2xl text-center font-semibold text-second">Berita Terbaru</h1>
        <div className="flex flex-row flex-wrap gap-5 justify-center mt-4 gap-y-5">
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
        <a href="#" className="py-1 px-3 rounded-lg bg-second text-white hover:bg-birumuda capitalize">
          Lihat Lainnya
        </a>
      </div>

      {/* Video */}
      <div className="video mt-10 px-5">
        <h1 className="text-xl md:text-2xl text-center font-semibold text-second">Video Terkait</h1>
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-4">
          <iframe src="https://www.youtube.com/embed/OjRQIV3RG7Y" allow="navigation" className="rounded-lg h-60 md:w-1/2"></iframe>
          <iframe src="https://www.youtube.com/embed/OjRQIV3RG7Y" allow="navigation" className="rounded-lg h-60 md:w-1/2"></iframe>
        </div>
      </div>

      {/* Lihat lainnya */}
      <div className="flex justify-center mt-5">
        <a href="#" className="py-1 px-3 rounded-lg bg-second text-white hover:bg-birumuda capitalize">
          Lihat Lainnya
        </a>
      </div>

      {/* Galeri */}
      <div className="galeri mt-10 px-5 bg-birumuda">
        <h1 className="text-xl md:text-2xl text-center font-semibold text-second">Galeri</h1>
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-4">
          <iframe src="https://www.youtube.com/embed/OjRQIV3RG7Y" allow="navigation" className="rounded-lg h-60 md:w-1/2"></iframe>
          <iframe src="https://www.youtube.com/embed/OjRQIV3RG7Y" allow="navigation" className="rounded-lg h-60 md:w-1/2"></iframe>
        </div>
      </div>

      {/* Lihat lainnya */}
      <div className="flex justify-center mt-5">
        <a href="#" className="py-1 px-3 rounded-lg bg-second text-white hover:bg-birumuda capitalize">
          Lihat Lainnya
        </a>
      </div>
    </div>
  );
};

export default Beranda;
