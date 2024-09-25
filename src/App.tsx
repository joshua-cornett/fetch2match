import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Search, Match } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
