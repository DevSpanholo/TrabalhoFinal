import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import Login from './pages/login/LoginForm'
import SolicitanteCon from "./pages/solicitante/SolicitanteCon";
import TipoRequisicaoCon from "./pages/tipoRequisicao/TipoRequisicaoCon";
import RequisicaoCon from "./pages/requisicao/RequisicaoCon";
import AndamentoCon from "./pages/andamento/AndamentoCon";
import AtividadeCon from "./pages/atividade/AtividadeCon";


const Home = lazy(() => import('./pages/home/Home'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));

function App() {
  
  const [token, setToken] = useState([])
  
  useEffect(() => {
    setToken(sessionStorage.getItem('token')); 
  }, []);

  if (!token || token <= '') {
    return <Login />
  }

  return (
    <BrowserRouter>
      <Menu/>      

      <Suspense fallback={<div>Carregando ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaborador" element={<ColaboradorCon />} />
          <Route path="/solicitante" element={<SolicitanteCon />} />
          <Route path="/tipoRequisicao" element={<TipoRequisicaoCon />} />
          <Route path="/requisicao" element={<RequisicaoCon />} />
          <Route path="/andamento" element={<AndamentoCon />} />
          <Route path="/atividade" element={<AtividadeCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

}
export default App;
