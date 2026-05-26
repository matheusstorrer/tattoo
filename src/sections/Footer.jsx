import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import styles from './Footer.module.css';
import logoImg from '../assets/logo_vaidade.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Working hours & Info */}
          <div className={styles.colInfo}>
            <div className={styles.hours}>
              <div className={styles.infoLabel}>Funcionamento</div>
              <p className={styles.infoValue}>Seg - Sáb: 09:00 - 20:00</p>
            </div>
            
            <div className={styles.address}>
              <div className={styles.infoLabel}>Endereço</div>
              <p className={styles.infoValue}>Av. Arcebispo Dom Geraldo Fernandes, 2777</p>
              <p className={styles.infoValue}>Londrina - PR</p>
            </div>

            <div className={styles.contacts}>
              <div className={styles.infoLabel}>Contato</div>
              <p className={styles.infoValue}>contato@vaidadestudio.com.br</p>
            </div>
          </div>

          {/* Socials & quick booking */}
          <div className={styles.colSocial}>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook" className={styles.socialBtn}>
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialBtn}>
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter/X" className={styles.socialBtn}>
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialBtn}>
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Telegram" className={styles.socialBtn}>
                <Send size={18} />
              </a>
            </div>

            <a href="#contact" className={styles.bookBtn}>
              <span>Reservar Horário</span>
            </a>
          </div>

          {/* Quick links navigation */}
          <div className={styles.colLinks}>
            <div className={styles.linkTitle}>Navegação</div>
            <nav className={styles.nav}>
              <a href="#about" className={styles.navLink}>Sobre Nós</a>
              <a href="#artists" className={styles.navLink}>Nossos Artistas</a>
              <a href="#gallery" className={styles.navLink}>Galeria de Fotos</a>
              <a href="#contact" className={styles.navLink}>Agendamento</a>
            </nav>
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
