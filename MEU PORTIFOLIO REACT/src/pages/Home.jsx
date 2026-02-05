import React from 'react';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import '../App.css'; 

const Home = () => {
  return (
    <>
      <Header />
      
      {}
      <main className="content-section">
        <h2>Últimas do blog</h2>
        
        <PostCard 
          title="5 dicas para sua carreira profissional"
          summary="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
        />
        
        <PostCard 
          title="Como aprender React rápido"
          summary="Hooks são essenciais para o desenvolvimento moderno..."
        />
        
        <PostCard 
          title="Entendendo Props e State"
          summary="A base para criar componentes dinâmicos no React"
        />
        
        <a href="#">Ver tudo</a>
      </main>
    </>
  );
};

export default Home;