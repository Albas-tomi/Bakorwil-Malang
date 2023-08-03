import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Beranda from './pages/Beranda';
import { Berita } from './pages/Berita';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/berita" element={<Berita />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
