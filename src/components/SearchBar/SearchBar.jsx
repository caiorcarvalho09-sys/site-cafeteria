import React from 'react';
import './SearchBar.css';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar-wrap">
      <div className="search-bar-inner">
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>

        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Buscar bebidas e lanches"
        />

        {value ? (
          <button 
            type="button" 
            className="search-clear-btn" 
            onClick={() => onChange('')} 
            title="Limpar pesquisa"
          >
            ✕
          </button>
        ) : (
          <div className="search-shortcut-badge" title="Shortcut (Command / Ctrl)">
            <span>⌘</span>
          </div>
        )}
      </div>
    </div>
  );
}

