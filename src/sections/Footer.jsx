import React from 'react';
import { Instagram } from 'lucide-react';
import styles from './Footer.module.css';
import logoImg from '../assets/logo_vaidade.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Address */}
          <div className={styles.colInfo}>
            <div className={styles.address}>
              <div className={styles.infoLabel}>Endereço</div>
              <p className={styles.infoValue}>Av. Arcebispo Dom Geraldo Fernandes, 2777</p>
              <p className={styles.infoValue}>Londrina - PR</p>
            </div>
          </div>

          {/* Instagram & quick booking */}
          <div className={styles.colSocial}>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/vaidadestudiotattoo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialBtn}>
                <Instagram size={18} />
              </a>
            </div>

            <a href="#contact" className={styles.bookBtn}>
              <span>Reservar Horário</span>
            </a>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © 2026 Vaidade Studio. Todos os direitos reservados.
          </div>
          
          <div className={styles.logo}>
            <img src={logoImg} alt="Vaidade Studio Logo" className={styles.footerLogo} />
          </div>

          <div className={styles.policies}>
            <a href="#" className={styles.policyLink}>Políticas de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
