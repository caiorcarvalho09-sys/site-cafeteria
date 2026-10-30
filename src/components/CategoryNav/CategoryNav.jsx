import React from 'react';
import { CATEGORIES_CONFIG } from '../../data/coffeeShopData';
import './CategoryNav.css';

export default function CategoryNav({ activeCategory, onSelectCategory }) {
  return (
    <div className="category-nav-grid">
      {/* CARD 1: COFFEE */}
      <div 
        className={`category-hero-card coffee-card ${activeCategory === 'Coffee' ? 'active' : ''}`}
        onClick={() => onSelectCategory('Coffee')}
        role="button"
        tabIndex={0}
      >
        <div className="card-top-info">
          <span className="cat-pill pill-available">Available</span>
        </div>
        
        <div className="cat-title-wrap">
          <h2 className="cat-title">Coffee</h2>
          <span className="cat-count">50 items</span>
        </div>

        {/* Marca d'água Vetorial: Xícara com Latte Art Rosetta */}
        <div className="cat-watermark watermark-coffee">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="6" opacity="0.35" />
            <ellipse cx="80" cy="80" rx="55" ry="55" stroke="currentColor" strokeWidth="4" opacity="0.4" />
            {/* Latte art rosette pattern */}
            <path d="M80 35 C75 55 50 65 52 82 C54 96 70 105 80 120 C90 105 106 96 108 82 C110 65 85 55 80 35 Z" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.5" />
            <path d="M80 50 C70 65 58 75 62 90 C66 102 75 108 80 115 C85 108 94 102 98 90 C102 75 90 65 80 50 Z" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.45" />
            <path d="M80 65 C74 75 68 82 70 95 C72 102 78 106 80 110 C82 106 88 102 90 95 C92 82 86 75 80 65 Z" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.4" />
            <line x1="80" y1="30" x2="80" y2="128" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* CARD 2: TEA */}
      <div 
        className={`category-hero-card tea-card ${activeCategory === 'Tea' ? 'active' : ''}`}
        onClick={() => onSelectCategory('Tea')}
        role="button"
        tabIndex={0}
      >
        <div className="card-top-info">
          <span className="cat-pill pill-available">Available</span>
        </div>
        
        <div className="cat-title-wrap">
          <h2 className="cat-title">Tea</h2>
          <span className="cat-count">20 items</span>
        </div>

        {/* Marca d'água Vetorial: Bule de Chá e Folhas */}
        <div className="cat-watermark watermark-tea">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45 75 C45 60 60 50 80 50 C100 50 115 60 115 75 C125 78 135 88 135 100 C135 115 120 125 105 125 L55 125 C40 125 25 115 25 100 C25 88 35 78 45 75 Z" stroke="currentColor" strokeWidth="5" opacity="0.4" />
            <path d="M115 75 C130 75 145 90 145 105 C145 120 125 120 115 115" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
            <path d="M40 85 C25 80 15 95 18 108" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
            <path d="M72 35 C72 35 75 42 70 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.45" />
            <path d="M85 30 C85 30 88 40 82 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.45" />
            <circle cx="80" cy="50" r="6" stroke="currentColor" strokeWidth="4" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* CARD 3: SNACK */}
      <div 
        className={`category-hero-card snack-card ${activeCategory === 'Snack' ? 'active' : ''}`}
        onClick={() => onSelectCategory('Snack')}
        role="button"
        tabIndex={0}
      >
        <div className="card-top-info">
          <span className="cat-pill pill-warning">
            Need to re-stock <span className="info-icon">ⓘ</span>
          </span>
        </div>
        
        <div className="cat-title-wrap">
          <h2 className="cat-title">Snack</h2>
          <span className="cat-count">10 items</span>
        </div>

        {/* Marca d'água Vetorial: Croissant e Pães */}
        <div className="cat-watermark watermark-snack">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 100 C30 85 45 60 80 55 C115 60 130 85 120 100 C110 112 95 118 80 118 C65 118 50 112 40 100 Z" stroke="currentColor" strokeWidth="5" opacity="0.4" />
            <path d="M55 75 C60 90 70 105 80 115" stroke="currentColor" strokeWidth="4" opacity="0.35" />
            <path d="M105 75 C100 90 90 105 80 115" stroke="currentColor" strokeWidth="4" opacity="0.35" />
            <path d="M80 55 L80 118" stroke="currentColor" strokeWidth="4" opacity="0.4" />
            <path d="M30 110 C20 100 25 80 35 75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
            <path d="M130 110 C140 100 135 80 125 75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
          </svg>
        </div>
      </div>
    </div>
  );
}

