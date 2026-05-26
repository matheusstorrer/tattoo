import React, { useState } from 'react';
import styles from './Services.module.css';

// Import sketch assets
import tigerSketch from '../assets/sketch_tiger.png';
import wolfSketch from '../assets/sketch_wolf.png';
import ravenSketch from '../assets/sketch_raven.png';
import dragonSketch from '../assets/sketch_dragon.png';
import phoenixSketch from '../assets/sketch_phoenix.png';
import neuralSketches from '../assets/neural_sketches.png';

const Services = () => {
  const [activeService, setActiveService] = useState(1);
  const [activeTab, setActiveTab] = useState('artists'); // 'artists' or 'neural'

  const servicesList = [
    {
      id: 1,
      title: 'Tattoo Sketches',
      description: 'Criação de desenhos autorais exclusivos baseados nas suas ideias e referências. Nossos artistas criam propostas únicas sob medida.',
    },
    {
      id: 2,
      title: 'Permanent Tattooing',
      description: 'Aplicação de tatuagem definitiva utilizando pigmentos e equipamentos premium, seguindo rigorosos padrões de biossegurança.',
    },
    {
      id: 3,
      title: 'Tattoo Adjustment / Cover Up',
      description: 'Ajuste, restauração ou cobertura total de tatuagens antigas que necessitam de novos traços, preenchimentos ou modificações.',
    },
    {
      id: 4,
      title: 'Laser Tattoo Removal',
      description: 'Remoção gradual ou clareamento de tatuagens com tecnologia a laser de última geração para futuras coberturas.',
    },
    {
      id: 5,
      title: 'Tattoo Master Course',
      description: 'Cursos profissionalizantes presenciais ministrados pelos nossos tatuadores seniores para iniciantes e intermediários.',
    },
    {
      id: 6,
      title: 'Piercing',
      description: 'Aplicação de joias corporais (microdermal, septo, cartilagem) com materiais de grau cirúrgico (titânio ou ouro).',
    },
  ];

  const artistSketches = [
    { id: 1, img: tigerSketch, title: 'Tigre Oriental' },
    { id: 2, img: wolfSketch, title: 'Lobo Geométrico' },
    { id: 3, img: ravenSketch, title: 'Corvo Sombrio' },
    { id: 4, img: dragonSketch, title: 'Dragão Imperial' },
    { id: 5, img: phoenixSketch, title: 'Fênix Renascida' },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Services</h2>

        <div className={styles.layout}>
          {/* Left panel - Vertical services selection */}
          <div className={styles.servicesSelection}>
            {servicesList.map((service) => (
              <div
                key={service.id}
                className={`${styles.serviceItem} ${
                  activeService === service.id ? styles.activeServiceItem : ''
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className={styles.serviceTitle}>{service.title}</div>
                <div 
                  className={`${styles.serviceDescWrapper} ${
                    activeService === service.id ? styles.descOpen : ''
                  }`}
                >
                  <p className={styles.serviceDesc}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right panel - Category specific content */}
          <div className={styles.contentPanel}>
            {activeService === 1 ? (
              // Tattoo sketches sub-tabs
              <div className={styles.sketchesContainer}>
                <div className={styles.tabsHeader}>
                  <button
                    className={`${styles.tabBtn} ${activeTab === 'artists' ? styles.activeTab : ''}`}
                    onClick={() => handleTabChange('artists')}
                  >
                    Our Artists
                  </button>
                  <button
                    className={`${styles.tabBtn} ${activeTab === 'neural' ? styles.activeTab : ''}`}
                    onClick={() => handleTabChange('neural')}
                  >
                    Neural Net AI
                  </button>
                </div>

                <div className={styles.tabContent}>
                  {activeTab === 'artists' ? (
                    // Horizontal scroll carousel of sketches
                    <div className={styles.sketchesCarousel}>
                      {artistSketches.map((sketch) => (
                        <div key={sketch.id} className={styles.sketchCard}>
                          <div className={styles.sketchImageWrapper}>
                            <img src={sketch.img} alt={sketch.title} className={styles.sketchImg} />
                          </div>
                          <div className={styles.sketchTitle}>{sketch.title}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Neural net concept preview
                    <div className={styles.neuralContainer}>
                      <div className={styles.neuralTextContent}>
                        <h4 className={styles.neuralHeader}>AI Tattoo Concept Generator</h4>
                        <p className={styles.neuralParagraph}>
                          Criamos designs preliminares inovadores a partir de descrições textuais 
                          utilizando nossos modelos neurais treinados localmente com milhares de obras.
                        </p>
                      </div>
                      <div className={styles.neuralImageWrapper}>
                        <img 
                          src={neuralSketches} 
                          alt="Modelos de rede neural" 
                          className={styles.neuralImg} 
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // Standard layout for other services
              <div className={styles.serviceDetailCard}>
                <div className={styles.serviceDetailText}>
                  <h3>{servicesList.find((s) => s.id === activeService)?.title}</h3>
                  <p className={styles.serviceDetailParagraph}>
                    {servicesList.find((s) => s.id === activeService)?.description}
                  </p>
                  <p className={styles.serviceDetailAddInfo}>
                    Consulte preços e orçamentos diretamente com o artista escolhido ou através do 
                    nosso formulário de agendamento rápido no final da página.
                  </p>
                  <a href="#contact" className={styles.detailBookBtn}>
                    Agendar Agora
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
