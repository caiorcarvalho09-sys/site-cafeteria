import React, { useState } from 'react';
import './ItemCustomizerModal.css';

export default function ItemCustomizerModal({ item, isOpen, onClose, onSave }) {
  if (!isOpen || !item) return null;

  const [selectedSize, setSelectedSize] = useState(item.size || 'Medium');
  const [selectedSugar, setSelectedSugar] = useState('Less Sugar');
  const [selectedMilk, setSelectedMilk] = useState('Standard');
  const [customNote, setCustomNote] = useState(item.note || '');

  const handleSave = () => {
    const finalNote = customNote.trim() || `${selectedSugar} • ${selectedMilk}`;
    onSave({
      ...item,
      size: selectedSize,
      note: finalNote
    });
    onClose();
  };

  return (
    <div className="customizer-backdrop" onClick={onClose}>
      <div className="customizer-box" onClick={(e) => e.stopPropagation()}>
        <div className="customizer-header">
          <div className="customizer-title-wrap">
            <img src={item.image} alt={item.name} className="customizer-thumb" />
            <div>
              <h3>Customize {item.name}</h3>
              <span className="customizer-price">${item.price.toFixed(2)}</span>
            </div>
          </div>
          <button type="button" className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="customizer-body">
          {/* Size selection */}
          <div className="option-group">
            <label>Cup Size</label>
            <div className="options-row">
              {['Regular', 'Medium', 'Large'].map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`option-pill ${selectedSize === s ? 'active' : ''}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Sugar level */}
          <div className="option-group">
            <label>Sugar Level</label>
            <div className="options-row">
              {['No Sugar', 'Less Sugar', 'Normal', 'Extra Sweet'].map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`option-pill ${selectedSugar === s ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedSugar(s);
                    setCustomNote(s);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Milk type */}
          <div className="option-group">
            <label>Milk Choice</label>
            <div className="options-row">
              {['Standard', 'Oat Milk', 'Almond Milk', 'Soy Milk'].map((m) => (
                <button
                  key={m}
                  type="button"
                  className={`option-pill ${selectedMilk === m ? 'active' : ''}`}
                  onClick={() => setSelectedMilk(m)}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Special instructions */}
          <div className="option-group">
            <label>Special Notes</label>
            <input
              type="text"
              placeholder="Ex: Extra Sauce, Double Shot, Extra Hot..."
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="note-input"
            />
          </div>
        </div>

        <div className="customizer-footer">
          <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
          <button type="button" className="btn-confirm" onClick={handleSave}>
            Update Order
          </button>
        </div>
      </div>
    </div>
  );
}

