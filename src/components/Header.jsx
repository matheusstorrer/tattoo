import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import logoVaidade from '../assets/logo_vaidade.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Sobre', href: '#about' },
    { label: 'Artistas', href: '#artists' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <img src={logoVaidade} alt="Vaidade Studio" className={styles.logoImage} />
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Abrir menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerOverlay} onClick={toggleMenu} />
        <nav className={styles.mobileNav}>
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={toggleMenu}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
