import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadastroImoveis from './pages/CadastroImoveis';
import FinalizacaoCadastro from './pages/FinalizacaoCadastro';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CadastroImoveis />} />
        <Route path="/finalizacaoCadastro" element={<FinalizacaoCadastro />} />
      </Routes>
    </Router>
  );
};

export default App;