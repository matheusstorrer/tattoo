import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronDown } from 'lucide-react';
import styles from './BookingForm.module.css';

const BookingForm = ({ artists }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artist: '',
    date: '',
    time: '',
    comment: '',
    reference: null,
  });

  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArtistSelect = (e) => {
    setFormData((prev) => ({ ...prev, artist: e.target.value }));
  };

  const selectDate = (day) => {
    const formattedDate = `2026-10-${day.toString().padStart(2, '0')}`;
    setFormData((prev) => ({ ...prev, date: formattedDate }));
    setDatePickerOpen(false);
  };

  const selectTime = (hour) => {
    const formattedTime = `${hour}:00`;
    setFormData((prev) => ({ ...prev, time: formattedTime }));
    setTimePickerOpen(false);
  };

  // Drag and Drop files
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData((prev) => ({ ...prev, reference: e.dataTransfer.files[0] }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, reference: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva solicitada com sucesso para ${formData.name}!`);
    console.log(formData);
  };

  // Days list for calendar
  const daysInOctober = Array.from({ length: 31 }, (_, i) => i + 1);
  const hoursList = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.grid}>
        {/* Left column - Fields */}
        <div className={styles.fields}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Jane Doe"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="jane@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Telefone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+55 11 99999-0000"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Artista</label>
            <div className={styles.selectWrapper}>
              <select
                name="artist"
                value={formData.artist}
                onChange={handleArtistSelect}
                required
                className={styles.select}
              >
                <option value="">Selecione o Artista</option>
                {artists.map((artist) => (
                  <option key={artist.id} value={artist.name}>
                    {artist.name}
                  </option>
                ))}
              </select>
              <ChevronDown className={styles.selectIcon} size={18} />
            </div>
          </div>

          <div className={styles.row}>
            {/* Custom Date Picker */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Data</label>
              <div 
                className={styles.customPickerTrigger}
                onClick={() => setDatePickerOpen(!datePickerOpen)}
              >
                <span>{formData.date ? formData.date : 'Selecionar data'}</span>
                <CalendarIcon size={18} className={styles.pickerIcon} />
              </div>

              {datePickerOpen && (
                <div className={styles.customPickerDropdown}>
                  <div className={styles.pickerTitle}>Outubro 2026</div>
                  <div className={styles.calendarGrid}>
                    {daysInOctober.map((day) => (
                      <div
                        key={day}
                        className={`${styles.calendarDay} ${
                          formData.date === `2026-10-${day.toString().padStart(2, '0')}`
                            ? styles.selectedDay
                            : ''
                        }`}
                        onClick={() => selectDate(day)}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Custom Time Picker */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Horário</label>
              <div 
                className={styles.customPickerTrigger}
                onClick={() => setTimePickerOpen(!timePickerOpen)}
              >
                <span>{formData.time ? formData.time : 'Selecionar hora'}</span>
                <Clock size={18} className={styles.pickerIcon} />
              </div>

              {timePickerOpen && (
                <div className={styles.customPickerDropdown}>
                  <div className={styles.pickerTitle}>Horários Disponíveis</div>
                  <div className={styles.hoursGrid}>
                    {hoursList.map((hour) => (
                      <div
                        key={hour}
                        className={`${styles.hourSlot} ${
                          formData.time === hour ? styles.selectedHour : ''
                        }`}
                        onClick={() => selectTime(hour.split(':')[0])}
                      >
                        {hour}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Mensagem / Comentário</label>
            <textarea
              name="comment"
              rows="4"
              placeholder="Descreva sua ideia de tatuagem, tamanho e local..."
              value={formData.comment}
              onChange={handleInputChange}
              className={styles.textarea}
            />
          </div>
        </div>

        {/* Right column - Drag & Drop references */}
        <div className={styles.uploadContainer}>
          <div className={styles.uploadTitle}>
            Tem alguma ideia ou referência de desenho? Envie-nos uma imagem.
          </div>

          <div
            className={`${styles.dropzone} ${dragOver ? styles.dropzoneActive : ''} ${
              formData.reference ? styles.dropzoneFilled : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {formData.reference ? (
              <div className={styles.fileInfo}>
                <div className={styles.fileName}>{formData.reference.name}</div>
                <div className={styles.fileSize}>
                  {(formData.reference.size / 1024 / 1024).toFixed(2)} MB
                </div>
                <button
                  type="button"
                  className={styles.removeFileBtn}
                  onClick={() => setFormData((prev) => ({ ...prev, reference: null }))}
                >
                  Remover
                </button>
              </div>
            ) : (
              <div className={styles.uploadPrompt}>
                <div className={styles.uploadIcon}>📸</div>
                <p>Arraste e solte sua imagem aqui ou</p>
                <label className={styles.fileLabel}>
                  Selecione do Arquivo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className={styles.fileInput}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </div>

      <button type="submit" className={styles.submitBtn}>
        <span>Agendar Online</span>
      </button>
    </form>
  );
};

export default BookingForm;
