import React, { useState, useEffect } from 'react';
import inkwillImg from '../assets/founder_inkwill.jpg';
import igaoImg from '../assets/artist_igao.jpg';
import styles from './About.module.css';

const founders = [
  { name: 'ink.will', title: 'Co-Fundador', image: inkwillImg },
  { name: 'Igão', title: 'Co-Fundador', image: igaoImg },
];

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 35;
    const y = (clientY - window.innerHeight / 2) / 35;
    setMousePos({ x, y });
  };

  return (
    <section id="about" className={styles.about} onMouseMove={handleMouseMove}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Sobre Nós</h2>
          
          <div className={styles.textWrapper}>
            <p className={styles.paragraph}>
              Nossa equipe é formada por profissionais com vasta experiência e uma visão única. 
              Inspirados em tradições ancestrais e tendências modernas, criamos tatuagens que 
              harmonizam com a personalidade de cada cliente.
            </p>
            
            <p className={styles.paragraph}>
              No Vaidade Studio, nos esforçamos para tornar cada visita ao nosso estúdio única e inesquecível. 
              Temos orgulho do nosso cuidado com os detalhes, atendimento personalizado e compromisso 
              em tornar cada esboço perfeito.
            </p>
            
            <p className={styles.paragraphHighlight}>
              Bem-vindo ao Vaidade Studio, um lugar onde cada tatuagem nasce do coração.
            </p>
          </div>

          <a href="#booking" className={styles.learnMoreBtn}>
            <span>Agendar Horário</span>
          </a>
        </div>

        {/* Two Founder Cards */}
        <div className={styles.visual}>
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={styles.imageCard}
              style={{
                transform: `translate3d(${mousePos.x * (index === 0 ? 1 : -1)}px, ${mousePos.y}px, 0) rotateX(${-mousePos.y / 2}deg) rotateY(${mousePos.x / 2 * (index === 0 ? 1 : -1)}deg)`,
              }}
            >
              <img src={founder.image} alt={founder.name} className={styles.image} />
              <div className={styles.cardInfo}>
                <div className={styles.founderName}>{founder.name}</div>
                <div className={styles.founderTitle}>{founder.title}</div>
              </div>
              
              <div className={styles.borderTopLeft} />
              <div className={styles.borderBottomRight} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
