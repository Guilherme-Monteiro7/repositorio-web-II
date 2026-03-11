import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Detalhes() {
  const { id } = useParams(); // Pega o ID que está na URL (ex: 1)
  const [veiculo, setVeiculo] = useState(null);

  useEffect(() => {
    // Busca apenas o carro com o ID específico
    fetch(`http://localhost:3000/veiculos/${id}`)
      .then((resposta) => resposta.json())
      .then((dados) => setVeiculo(dados));
  }, [id]);

  // Enquanto os dados não chegam, mostra "Carregando..."
  if (!veiculo) return <p>Carregando detalhes...</p>;

  return (
    <div style={containerStyle}>
      <h1>{veiculo.titulo}</h1>
      
      <img 
        src={veiculo.imagem} 
        alt={veiculo.titulo} 
        style={imgStyle}
        onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Foto+Indisponível'; }} 
      />

      <div style={infoBox}>
        <p style={{ fontSize: '24px', color: 'green', fontWeight: 'bold' }}>R$ {veiculo.preco}</p>
        <p><strong>Ano:</strong> {veiculo.ano}</p>
        <p><strong>Quilometragem:</strong> {veiculo.km} km</p>
        <p><strong>Descrição:</strong> {veiculo.descricao}</p>
        <hr />
        <p style={{ marginTop: '10px' }}><strong>📞 Contato do Vendedor:</strong></p>
        <p style={{ fontSize: '18px', color: '#007bff' }}>{veiculo.contato || "Sem contato informado"}</p>
      </div>

      <Link to="/">
        <button style={btnVoltar}>Voltar para Lista</button>
      </Link>
    </div>
  );
}

// Estilos CSS
const containerStyle = { maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' };
const imgStyle = { width: '100%', borderRadius: '10px', marginBottom: '20px' };
const infoBox = { background: '#f9f9f9', padding: '20px', borderRadius: '10px', border: '1px solid #ddd' };
const btnVoltar = { marginTop: '20px', padding: '10px 20px', cursor: 'pointer', background: '#333', color: '#fff', border: 'none', borderRadius: '5px' };

export default Detalhes;