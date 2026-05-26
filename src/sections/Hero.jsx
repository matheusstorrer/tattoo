import React from 'react';
import { ArrowDown } from 'lucide-react';
import styles from './Hero.module.css';
const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Dark background overlays */}
      <div className={styles.overlay} />
      
      {/* Background Smoke Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.smokeVideo}
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Animated Masked Title */}
        <h1 className={styles.titleDesktop}>
          <span className={styles.letter}>T</span>
          <span className={styles.letter}>A</span>
          <span className={styles.letter}>T</span>
          <span className={styles.letter}>T</span>
          <span className={styles.letter}>O</span>
          <span className={styles.letter}>O</span>
        </h1>

        {/* Stacked mobile version to fit screens nicely - Vertical T-A-T-T-O-O stack */}
        <h1 className={styles.titleMobile}>
          <span className={styles.letter}>T</span>
          <span className={styles.letter}>A</span>
          <span className={styles.letter}>T</span>
          <span className={styles.letter}>T</span>
          <span className={styles.letter}>O</span>
          <span className={styles.letter}>O</span>
        </h1>
      </div>

      {/* Explore More Indicator */}
      <div className={styles.exploreIndicator}>
        <span className={styles.exploreText}>Saiba mais</span>
        <div className={styles.arrowWrapper}>
          <ArrowDown className={styles.arrow} size={16} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
