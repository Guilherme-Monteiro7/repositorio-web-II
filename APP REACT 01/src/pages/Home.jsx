import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [veiculos, setVeiculos] = useState([]);

  // Busca os dados assim que a tela carrega
  useEffect(() => {
    fetch('http://localhost:3000/veiculos')
      .then((resposta) => resposta.json())
      .then((dados) => setVeiculos(dados))
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Classificados de Veículos</h1>
      
      {/* Botão para ir para a tela de Cadastro */}
      <Link to="/cadastrar">
        <button style={{ padding: '10px', fontSize: '16px', marginBottom: '20px', cursor: 'pointer' }}>
          + Cadastrar Novo Veículo
        </button>
      </Link>

      {/* Lista de Carros */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {veiculos.map((carro) => (
          <div key={carro.id} style={estiloCard}>
             
             {/* IMAGEM COM PROTEÇÃO DE ERRO */}
             <img 
                src={carro.imagem} 
                alt={carro.titulo} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
                onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Foto+Indisponível'; }} 
             />

            <h3>{carro.titulo}</h3>
            <p style={{ fontWeight: 'bold', color: 'green' }}>R$ {carro.preco}</p>
            <p>{carro.ano} - {carro.km} km</p>
            
            {/* Link para a página de detalhes */}
            <Link to={`/detalhes/${carro.id}`}>
              <button style={{ marginTop: '10px', width: '100%', cursor: 'pointer' }}>Ver Detalhes</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Estilos CSS (Objeto)
const estiloCard = {
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '15px',
  width: '250px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff'
};

export default Home;