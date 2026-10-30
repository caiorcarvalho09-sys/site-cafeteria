import React from 'react';
import './Header.css';

export default function Header({ totalOrders, onOpenReport, notificationCount = 1 }) {
  // Data atual formatada elegante
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <header className="pos-header">
      {/* Brand & Date */}
      <div className="pos-header-left">
        <div className="pos-brand">
          <div className="brand-logo-circle">
            <svg viewBox="0 0 24 24" fill="none" className="brand-svg-leaf">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.2" />
              <path d="M12 7c-2.5 0-4.5 2-4.5 4.5S12 17 12 17s4.5-3 4.5-5.5S14.5 7 12 7z" fill="currentColor" opacity="0.3" />
              <path d="M12 9v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="brand-title-wrap">
            <h1 className="brand-title">GREEN<br />GROUNDS<br /><span>COFFEE</span></h1>
          </div>
        </div>

        <div className="pos-date-badge">
          <span>{formattedDate || 'Thursday, 23 June'}</span>
        </div>
      </div>

      {/* Stats & Actions */}
      <div className="pos-header-right">
        <div className="pos-orders-counter">
          <span>Total : <strong>{totalOrders} Orders</strong></span>
        </div>

        <button 
          type="button" 
          className="pos-report-btn" 
          onClick={onOpenReport}
          title="Ver Relatório de Desempenho e Vendas"
        >
          <span>Report</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </button>

        {/* Notificações */}
        <button type="button" className="pos-icon-btn pos-bell-btn" title="Notificações">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
        </button>

        {/* Perfil do Caixa */}
        <div className="pos-profile-pill">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" 
            alt="Samantha W - Cashier" 
            className="profile-avatar"
          />
          <div className="profile-info">
            <span className="profile-name">Samantha W</span>
            <span className="profile-role">Cashier</span>
          </div>
        </div>
      </div>
    </header>
  );
}

