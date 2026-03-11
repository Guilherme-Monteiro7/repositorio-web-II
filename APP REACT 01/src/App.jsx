import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Detalhes from './pages/Detalhes';
import './App.css'; // Se tiver CSS global

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastrar" element={<Cadastro />} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
    </Routes>
  );
}

export default App;