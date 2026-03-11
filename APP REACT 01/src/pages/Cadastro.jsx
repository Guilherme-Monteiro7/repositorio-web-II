import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Cadastro() {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  // Estado inicial do formulário com todos os campos pedidos
  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    preco: '',
    ano: '',
    km: '',
    imagem: '',
    contato: ''
  });

  // Função que atualiza os dados enquanto você digita
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Função que envia os dados para o servidor quando clica em Salvar
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que a página recarregue

    // Validação básica (opcional)
    if (!form.titulo || !form.preco) {
      alert("Preencha pelo menos o Título e o Preço!");
      return;
    }

    try {
      await fetch('http://localhost:3000/veiculos', {
        method: 'POST', // Método para SALVAR novos dados
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form) // Transforma o objeto em texto JSON
      });

      alert("Veículo cadastrado com sucesso!");
      navigate('/'); // Volta automaticamente para a Home
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Cadastrar Novo Veículo</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        <label>Título do Anúncio:</label>
        <input name="titulo" placeholder="Ex: Honda Civic 2020" onChange={handleChange} required style={inputStyle} />

        <label>Preço (R$):</label>
        <input name="preco" type="number" placeholder="Ex: 85000" onChange={handleChange} required style={inputStyle} />

        <label>Descrição:</label>
        <textarea name="descricao" placeholder="Detalhes do carro..." onChange={handleChange} style={inputStyle} />

        <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1 }}>
                <label>Ano:</label>
                <input name="ano" type="number" placeholder="2020" onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
                <label>Quilometragem:</label>
                <input name="km" type="number" placeholder="50000" onChange={handleChange} style={inputStyle} />
            </div>
        </div>

        <label>URL da Imagem:</label>
        <input name="imagem" placeholder="Cole o link de uma imagem da internet" onChange={handleChange} style={inputStyle} />
        
        <label>Contato (Tel/Email):</label>
        <input name="contato" placeholder="(11) 99999-9999" onChange={handleChange} style={inputStyle} />

        <button type="submit" style={buttonStyle}>Salvar Anúncio</button>
      </form>

      <br />
      <Link to="/">Cancelar e Voltar</Link>
    </div>
  );
}

// Estilos simples para ficar bonitinho
const inputStyle = { padding: '8px', borderRadius: '4px', border: '1px solid #ccc' };
const buttonStyle = { padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '10px' };

export default Cadastro;