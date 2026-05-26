import React, { useState, useEffect } from 'react';

const LetterEditor = () => {
  // Initial state for 6 letters: [x%, y%, zoomX%, zoomY%]
  const [styles, setStyles] = useState([
    { x: 50, y: 40, zoomX: 100, zoomY: 100 },
    { x: 50, y: 60, zoomX: 100, zoomY: 100 },
    { x: 50, y: 30, zoomX: 100, zoomY: 100 },
    { x: 50, y: 20, zoomX: 100, zoomY: 100 },
    { x: 50, y: 35, zoomX: 100, zoomY: 100 },
    { x: 50, y: 25, zoomX: 100, zoomY: 100 },
  ]);

  const [isOpen, setIsOpen] = useState(true);

  // Apply CSS variables to the document root whenever styles change
  useEffect(() => {
    styles.forEach((style, index) => {
      const idx = index + 1;
      document.documentElement.style.setProperty(`--pos-${idx}`, `${style.x}% ${style.y}%`);
      
      // If both are 100%, we default to 'cover', otherwise output explicit width/height %
      const sizeVal = (style.zoomX === 100 && style.zoomY === 100)
        ? 'cover'
        : `${style.zoomX}% ${style.zoomY}%`;
        
      document.documentElement.style.setProperty(`--size-${idx}`, sizeVal);
    });
  }, [styles]);

  const updateStyle = (index, field, value) => {
    const newStyles = [...styles];
    newStyles[index][field] = Number(value);
    setStyles(newStyles);
  };

  // Helper to quickly reset a letter to standard cover
  const resetToCover = (index) => {
    const newStyles = [...styles];
    newStyles[index].zoomX = 100;
    newStyles[index].zoomY = 100;
    setStyles(newStyles);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999,
          padding: '10px 20px', background: '#fff', color: '#000', borderRadius: '8px',
          fontWeight: 'bold', cursor: 'pointer', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
        }}
      >
        Abrir Editor de Letras
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      width: '340px',
      maxHeight: '90vh',
      overflowY: 'auto',
      background: 'rgba(0,0,0,0.92)',
      color: '#fff',
      padding: '20px',
      borderRadius: '12px',
      zIndex: 9999,
      backdropFilter: 'blur(10px)',
      border: '1px solid #333',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--accent, #ccff00)' }}>Editor de Enquadramento</h3>
        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>X</button>
      </div>
      
      <p style={{ fontSize: '12px', color: '#aaa', marginBottom: '15px', lineHeight: '1.4' }}>
        Ajuste a posição e o zoom horizontal/vertical de cada foto para cobrir perfeitamente as curvas das letras (especialmente T e A).
      </p>

      {['T (Tigre)', 'A (Samurai)', 'T (Minato)', 'T (Toji)', 'O (Espartano)', 'O (Tanjiro)'].map((letter, i) => (
        <div key={i} style={{ marginBottom: '20px', padding: '12px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h4 style={{ margin: 0, fontSize: '14px', color: '#fff' }}>Letra {i + 1}: {letter}</h4>
            <button 
              onClick={() => resetToCover(i)}
              style={{
                background: 'none', border: 'none', color: 'var(--accent, #ccff00)', 
                fontSize: '11px', cursor: 'pointer', textDecoration: 'underline'
              }}
            >
              Resetar (Cover)
            </button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Zoom X (Largura): <span>{styles[i].zoomX}%</span>
              <input type="range" min="50" max="300" value={styles[i].zoomX} onChange={(e) => updateStyle(i, 'zoomX', e.target.value)} style={{ width: '120px' }} />
            </label>
            
            <label style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Zoom Y (Altura): <span>{styles[i].zoomY}%</span>
              <input type="range" min="50" max="300" value={styles[i].zoomY} onChange={(e) => updateStyle(i, 'zoomY', e.target.value)} style={{ width: '120px' }} />
            </label>
            
            <label style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Posição X (Horiz.): <span>{styles[i].x}%</span>
              <input type="range" min="0" max="100" value={styles[i].x} onChange={(e) => updateStyle(i, 'x', e.target.value)} style={{ width: '120px' }} />
            </label>
            
            <label style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Posição Y (Vert.): <span>{styles[i].y}%</span>
              <input type="range" min="0" max="100" value={styles[i].y} onChange={(e) => updateStyle(i, 'y', e.target.value)} style={{ width: '120px' }} />
            </label>
          </div>
        </div>
      ))}
      
      <div style={{ marginTop: '20px', fontSize: '11px', color: '#888', lineHeight: '1.3' }}>
        * Dica: Se alguma letra mostrar espaço transparente, aumente o Zoom X ou Zoom Y até preencher o desenho por completo!
      </div>
    </div>
  );
};

export default LetterEditor;
