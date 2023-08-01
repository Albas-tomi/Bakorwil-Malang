import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Beranda from './pages/Beranda';
import { Berita } from './pages/Berita';

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
    </>
  );
}

export default App;
