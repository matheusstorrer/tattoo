import React, { useState, useEffect } from 'react';
import stevenImg from '../assets/founder_inkwill.jpg';
import styles from './About.module.css';

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Mouse hover movement on desktop
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 35;
    const y = (clientY - window.innerHeight / 2) / 35;
    setMousePos({ x, y });
  };

  // Scroll effect for mobile parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

        {/* Parallax Founder visual card */}
        <div className={styles.visual}>
          <div 
            className={styles.imageCard}
            style={{
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) rotateX(${-mousePos.y / 2}deg) rotateY(${mousePos.x / 2}deg)`,
            }}
          >
            <img src={stevenImg} alt="ink.will" className={styles.image} />
            <div className={styles.cardInfo}>
              <div className={styles.founderName}>ink.will</div>
              <div className={styles.founderTitle}>Fundador do Vaidade Studio</div>
            </div>
            
            {/* Dark stylized borders */}
            <div className={styles.borderTopLeft} />
            <div className={styles.borderBottomRight} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
