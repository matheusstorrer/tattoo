import React, { useState } from 'react';
import styles from './Gallery.module.css';

// Import gallery images
import tanjiroImg from '../assets/gallery_tanjiro.jpg';
import minatoImg from '../assets/gallery_minato.jpg';
import tojiImg from '../assets/gallery_toji.jpg';
import tigerImg from '../assets/gallery_tiger.png';
import samuraiImg from '../assets/gallery_samurai.png';
import spartanImg from '../assets/gallery_spartan.png';

const Gallery = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const galleryItems = [
    {
      id: 1,
      image: tigerImg,
      client: 'Marcos Silva',
      technique: 'Realismo Dark / Geometric',
      artist: 'Igão',
      meaning: 'Um tigre hiper-realista imerso em recortes geométricos obscuros, simbolizando a força primitiva rasgando as barreiras lógicas da mente.',
    },
    {
      id: 2,
      image: minatoImg,
      client: 'Felipe Costa',
      technique: 'Geek / Anime',
      artist: 'Napa',
      meaning: 'Tatuagem do Minato Namikaze (Naruto), o Relâmpago Amarelo. Representa velocidade, sacrifício e a força de vontade de proteger quem ama.',
    },
    {
      id: 3,
      image: spartanImg,
      client: 'Lucas Nogueira',
      technique: 'Realismo Preto e Cinza / Lettering',
      artist: 'Lucas',
      meaning: 'Capacete Espartano (Gladiador). Uma representação clássica de resiliência, disciplina militar e a coragem inabalável de lutar pelas próprias convicções.',
    },
    {
      id: 4,
      image: samuraiImg,
      client: 'Ricardo Mendes',
      technique: 'Realismo Dark / Oriental',
      artist: 'ink.will',
      meaning: 'Máscara Oni de Samurai com detalhes de dragão esculpidos na armadura. Representa a dualidade entre honra, disciplina e a fúria implacável em batalha.',
    },
    {
      id: 5,
      image: tanjiroImg,
      client: 'Vitor Hugo',
      technique: 'Geek / Colorido',
      artist: 'Napa',
      meaning: 'Tanjiro Kamado (Demon Slayer) usando a respiração do fogo. Simboliza a compaixão inabalável, a determinação em proteger a família e a força para superar qualquer obstáculo.',
    },
    {
      id: 6,
      image: tojiImg,
      client: 'André Silva',
      technique: 'Geek / Freestyle',
      artist: 'Napa',
      meaning: 'Toji Fushiguro (Jujutsu Kaisen). Simboliza quebrar correntes impostas pelo destino, força bruta e viver as próprias regras independente da sociedade.',
    },
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.title}>Galeria</h2>

        <div className={styles.grid}>
          {galleryItems.map((item) => {
            const isFlipped = !!flippedCards[item.id];
            return (
              <div 
                key={item.id} 
                className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
                onClick={() => handleCardClick(item.id)}
              >
                {/* 3D Inner Wrapper */}
                <div className={styles.cardInner}>
                  {/* Front Side */}
                  <div className={styles.cardFront}>
                    <img src={item.image} alt={item.client} className={styles.image} />
                    <div className={styles.hoverOverlay}>
                      <span className={styles.hoverText}>Ver detalhes</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className={styles.cardBack}>
                    <div className={styles.backContent}>
                      <div className={styles.clientName}>{item.client}</div>
                      
                      <div className={styles.metaRow}>
                        <span className={styles.metaLabel}>Estilo:</span>
                        <span className={styles.metaValue}>{item.technique}</span>
                      </div>
                      
                      <div className={styles.metaRow}>
                        <span className={styles.metaLabel}>Artista:</span>
                        <span className={styles.metaValue}>{item.artist}</span>
                      </div>

                      <div className={styles.meaningBox}>
                        <div className={styles.meaningTitle}>Significado</div>
                        <p className={styles.meaningText}>{item.meaning}</p>
                      </div>

                      <button className={styles.closeBackBtn}>Voltar</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className={styles.lookMoreBtn}>
          <span>Ver Mais Obras</span>
        </button>
      </div>
    </section>
  );
};

export default Gallery;
