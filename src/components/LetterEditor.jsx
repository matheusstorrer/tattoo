import React, { useState, useEffect } from 'react';

const LetterEditor = () => {
  const defaultStyles = [
    { x: 50, y: 40, zoomX: 100, zoomY: 100 },
    { x: 50, y: 60, zoomX: 100, zoomY: 100 },
    { x: 50, y: 30, zoomX: 100, zoomY: 100 },
    { x: 50, y: 20, zoomX: 100, zoomY: 100 },
    { x: 50, y: 35, zoomX: 100, zoomY: 100 },
    { x: 50, y: 25, zoomX: 100, zoomY: 100 },
  ];

  // Initialize from localStorage if present
  const [styles, setStyles] = useState(() => {
    const saved = localStorage.getItem('tattoo-letter-styles');
    return saved ? JSON.parse(saved) : defaultStyles;
  });

  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  // Apply CSS variables and save to localStorage whenever styles change
  useEffect(() => {
    styles.forEach((style, index) => {
      const idx = index + 1;
      document.documentElement.style.setProperty(`--pos-${idx}`, `${style.x}% ${style.y}%`);
      
      const sizeVal = (style.zoomX === 100 && style.zoomY === 100)
        ? 'cover'
        : `${style.zoomX}% ${style.zoomY}%`;
        
      document.documentElement.style.setProperty(`--size-${idx}`, sizeVal);
    });
    localStorage.setItem('tattoo-letter-styles', JSON.stringify(styles));
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

  // Copy configurations JSON to clipboard for the AI agent
  const handleExport = () => {
    const configStr = JSON.stringify(styles, null, 2);
    navigator.clipboard.writeText(configStr)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
        alert('Configurações:\n' + configStr);
      });
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
        Ajuste a posição e o zoom horizontal/vertical de cada foto. Suas alterações são salvas localmente no navegador!
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
      
      <button 
        onClick={handleExport}
        style={{
          width: '100%', padding: '10px', background: 'var(--accent, #ccff00)', color: '#000',
          fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer', marginTop: '10px',
          boxShadow: '0 2px 6px rgba(204, 255, 0, 0.2)', transition: 'background 0.2s'
        }}
      >
        {copied ? 'Copiado!' : 'Copiar Configurações (Enviar p/ IA)'}
      </button>

      <div style={{ marginTop: '15px', fontSize: '11px', color: '#888', lineHeight: '1.3' }}>
        * Quando terminar de enquadrar, clique em <strong>Copiar Configurações</strong> e cole no chat para eu salvar permanentemente no código!
      </div>
    </div>
  );
};

export default LetterEditor;
