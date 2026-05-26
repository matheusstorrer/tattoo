import React from 'react';
import BookingForm from '../components/BookingForm';
import styles from './Contact.module.css';

const Contact = ({ artistsData }) => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contato</h2>
          <p className={styles.subtitle}>
            Pronto para dar o próximo passo? Faça sua reserva online preenchendo os dados abaixo. 
            Nossa equipe responderá com a confirmação e orientações para o seu agendamento.
          </p>
        </div>

        <div className={styles.formWrapper} id="booking">
          <BookingForm artists={artistsData} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
