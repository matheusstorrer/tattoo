import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Artists from './sections/Artists';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Reviews from './sections/Reviews';
import Footer from './sections/Footer';

const App = () => {
  const [activeArtistId, setActiveArtistId] = useState(2);

  const artistsData = [
    {
      id: 2,
      name: 'Napa',
      imageKey: 'napa',
      experience: '5 anos, especializado em cultura pop',
      technique: 'Freestyle • Geek',
      rank: 'Especialista',
      bio: 'Napa traz a cultura pop e o universo Geek para a pele com um estilo único e autêntico. Trabalhando muito com Freestyle, ele cria composições dinâmicas e incrivelmente detalhadas dos seus personagens favoritos.',
    },
    {
      id: 3,
      name: 'Lucas',
      imageKey: 'lucas',
      experience: '8 anos, especializado em artes finas',
      technique: 'Realismo • Pontilhismo • Lettering',
      rank: 'Sênior',
      bio: 'Lucas possui uma precisão cirúrgica em suas obras, misturando realismo com pontilhismo e finalizando com lettering impecável. É a escolha perfeita para tatuagens de alta complexidade técnica.',
    },
    {
      id: 1,
      name: 'Igão',
      imageKey: 'igao',
      experience: '7 anos, especializado em realismo sombrio',
      technique: 'Preto & Cinza • Pontilhismo • Dark',
      rank: 'Especialista',
      bio: 'Igão é um especialista em Preto & Cinza e estética Dark. Seu trabalho impressiona pelo uso magistral de sombras e pontilhismo para criar obras de arte com uma atmosfera densa, realista e cheia de atitude.',
    },
    {
      id: 4,
      name: 'ink.will',
      imageKey: 'inkwill',
      experience: '10 anos, especializado em múltiplos estilos',
      technique: 'Realismo • Blackwork • Fine Line',
      rank: 'Mestre',
      bio: 'ink.will é co-fundador do Vaidade Studio e um artista completo com domínio de diversas técnicas. Sua versatilidade e visão artística elevam cada projeto, transformando ideias em obras de arte únicas na pele.',
    },
  ];

  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Artists 
          artistsData={artistsData} 
          activeArtistId={activeArtistId} 
          setActiveArtistId={setActiveArtistId} 
        />
        <Gallery />
        <Contact artistsData={artistsData} />
        <Reviews />
      </main>
      <Footer />
    </>
  );
};

export default App;
