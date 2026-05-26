import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Reviews.module.css';

// Import review assets
import aliceImg from '../assets/review_alice.png';
import kristoferImg from '../assets/review_kristofer.png';
import tracyImg from '../assets/review_tracy.png';

const Reviews = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const reviewsData = [
    {
      id: 1,
      name: 'RODRIGO',
      image: kristoferImg,
      technique: 'Graphics / Engraving',
      artist: 'Igão',
      area: 'Sleeve (Manga)',
      stars: 5,
      text: 'O mestre é excelente. Tudo foi super tranquilo e agradável. Altamente recomendado para todos, foi uma experiência fantástica! Conversamos sobre diversos assuntos paralelos enquanto ele tatuava de forma muito calma e focada. Com certeza voltarei para fechar o braço todo!',
    },
    {
      id: 2,
      name: 'CAMILA',
      image: aliceImg,
      technique: 'Ornamental / Geometry',
      artist: 'Napa',
      area: 'Clavicle (Clavícula)',
      stars: 5,
      text: 'Ela não é apenas uma artista comum, mas sim uma especialista em sua área que se atenta a cada mínimo detalhe do processo de criação da tatuagem. Ouvindo minhas vontades, sugerindo as melhores simetrias e executando um traço finíssimo de extrema qualidade.',
    },
    {
      id: 3,
      name: 'TATIANE (Taty)',
      image: tracyImg,
      technique: 'Realismo Preto e Cinza',
      artist: 'Lucas',
      area: 'Forearm (Antebraço)',
      stars: 5,
      text: 'Ele fez uma tatuagem de altíssima qualidade em mim. Gostei muito da postura profissional, agulhas estéreis abertas na minha frente, ambiente super limpo e aconchegante. Recomendo fortemente o trabalho dele!',
    },
  ];

  const handlePrev = () => {
    setActiveReviewIndex((prev) => 
      prev === 0 ? reviewsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveReviewIndex((prev) => 
      prev === reviewsData.length - 1 ? 0 : prev + 1
    );
  };

  const currentReview = reviewsData[activeReviewIndex];

  return (
    <section id="reviews" className={styles.reviews}>
      <div className={styles.container}>
        <h2 className={styles.title}>Avaliações</h2>

        <div className={styles.sliderContainer}>
          {/* Review Card */}
          <div className={styles.reviewCard}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <img 
                  src={currentReview.image} 
                  alt={currentReview.name} 
                  className={styles.reviewImage} 
                />
              </div>
            </div>

            <div className={styles.contentCol}>
              <div className={styles.headerRow}>
                <div>
                  <h3 className={styles.reviewerName}>{currentReview.name}</h3>
                  <div className={styles.metadata}>
                    <span><strong>Estilo:</strong> {currentReview.technique}</span>
                    <span><strong>Artista:</strong> {currentReview.artist}</span>
                    <span><strong>Área:</strong> {currentReview.area}</span>
                  </div>
                </div>

                {/* Stars */}
                <div className={styles.stars}>
                  {Array.from({ length: currentReview.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="var(--accent)" stroke="var(--accent)" />
                  ))}
                </div>
              </div>

              <div className={styles.textQuote}>
                <span className={styles.quoteMark}>“</span>
                <p className={styles.reviewText}>{currentReview.text}</p>
                <span className={styles.quoteMarkClose}>”</span>
              </div>
            </div>
          </div>

          {/* Carousel Navigator Controls */}
          <div className={styles.navigator}>
            <button 
              className={styles.navBtn} 
              onClick={handlePrev}
              aria-label="Avaliação anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Custom Compass/Runic center pagination styling */}
            <div className={styles.paginationDisplay}>
              <div className={styles.runicCircle}>
                <div className={styles.compassLine} style={{ transform: `rotate(${activeReviewIndex * 120}deg)` }} />
              </div>
              <span className={styles.counterText}>
                {activeReviewIndex + 1} / {reviewsData.length}
              </span>
            </div>

            <button 
              className={styles.navBtn} 
              onClick={handleNext}
              aria-label="Próxima avaliação"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
