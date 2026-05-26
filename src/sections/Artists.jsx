import React, { useState } from 'react';
import styles from './Artists.module.css';

import igaoImg from '../assets/artist_igao.jpg';
import napaImg from '../assets/artist_napa.png';
import lucasImg from '../assets/artist_lucas.png';

const Artists = ({ artistsData, activeArtistId, setActiveArtistId }) => {
  const [expandedId, setExpandedId] = useState(artistsData[0].id);

  const handleArtistClick = (id) => {
    setActiveArtistId(id);
    setExpandedId(id === expandedId ? null : id);
  };

  const imagesMap = {
    igao: igaoImg,
    napa: napaImg,
    lucas: lucasImg
  };

  const activeArtist = artistsData.find(a => a.id === activeArtistId) || artistsData[0];

  return (
    <section id="artists" className={styles.artists}>
      <div className={styles.container}>
        <h2 className={styles.title}>Artistas</h2>

        {/* Desktop View */}
        <div className={styles.desktopLayout}>
          {/* Left panel - List of names */}
          <div className={styles.artistsList}>
            {artistsData.map((artist) => (
              <div
                key={artist.id}
                className={`${styles.artistNameItem} ${
                  activeArtistId === artist.id ? styles.activeNameItem : ''
                }`}
                onMouseEnter={() => setActiveArtistId(artist.id)}
              >
                <div className={styles.artistNameText}>{artist.name}</div>
                <div className={styles.activeIndicator} />
              </div>
            ))}
          </div>

          {/* Right panel - Dynamic card detail */}
          <div className={styles.detailsPanel}>
            <div className={styles.detailsCard}>
              <div className={styles.imageColumn}>
                <img 
                  src={imagesMap[activeArtist.imageKey]} 
                  alt={activeArtist.name} 
                  className={styles.artistImage} 
                />
              </div>
              <div className={styles.infoColumn}>
                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Experiência: </span>
                    <span className={styles.statVal}>{activeArtist.experience}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Técnica: </span>
                    <span className={styles.statVal}>{activeArtist.technique}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Nível: </span>
                    <span className={styles.statVal}>{activeArtist.rank}</span>
                  </div>
                </div>

                <p className={styles.bio}>{activeArtist.bio}</p>

                <div className={styles.actions}>
                  <a href="#gallery" className={styles.actionBtnSecondary}>
                    Obras dele
                  </a>
                  <a href="#contact" className={styles.actionBtnPrimary}>
                    Agendar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View Accordions */}
        <div className={styles.mobileLayout}>
          {artistsData.map((artist) => {
            const isOpen = expandedId === artist.id;
            return (
              <div key={artist.id} className={styles.accordionItem}>
                <button
                  className={`${styles.accordionHeader} ${isOpen ? styles.accordionHeaderOpen : ''}`}
                  onClick={() => handleArtistClick(artist.id)}
                >
                  <span>{artist.name}</span>
                  <span className={styles.accordionIcon}>{isOpen ? '−' : '+'}</span>
                </button>

                <div 
                  className={`${styles.accordionCollapse} ${
                    isOpen ? styles.accordionCollapseOpen : ''
                  }`}
                >
                  <div className={styles.accordionContent}>
                    <img 
                      src={imagesMap[artist.imageKey]} 
                      alt={artist.name} 
                      className={styles.mobileArtistImage} 
                    />
                    
                    <div className={styles.mobileStats}>
                      <div className={styles.mobileStatItem}>
                        <strong>Exp:</strong> {artist.experience}
                      </div>
                      <div className={styles.mobileStatItem}>
                        <strong>Estilo:</strong> {artist.technique}
                      </div>
                      <div className={styles.mobileStatItem}>
                        <strong>Rank:</strong> {artist.rank}
                      </div>
                    </div>

                    <p className={styles.mobileBio}>{artist.bio}</p>

                    <div className={styles.mobileActions}>
                      <a href="#gallery" className={styles.mobileBtnSecondary}>
                        Obras
                      </a>
                      <a href="#contact" className={styles.mobileBtnPrimary}>
                        Agendar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Artists;
