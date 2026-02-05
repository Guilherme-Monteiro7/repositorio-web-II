import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <Link to="/">Blog</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/descricao">Descrição</Link>
      </nav>

      {}
      <div className="header-content">
        <img src="/perfil.jpg" alt="Perfil" className="avatar"/>
        
        <div className="profile-section">
          <h1>Guilherme Monteiro</h1>
          <p>
            Sou técnico em Informática, com experiência em edição de vídeos e produção de conteúdos digitais.
            Atualmente, estou cursando o 4º semestre de Análise e Desenvolvimento de Sistemas,
            buscando aprimorar meus conhecimentos em tecnologia, programação e soluções digitais,
            sempre com foco em aprendizado contínuo e evolução profissional.
          </p>
        </div>
      </div>

    </header>
  );
};

export default Header;