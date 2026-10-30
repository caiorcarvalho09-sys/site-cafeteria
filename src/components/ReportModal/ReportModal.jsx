import React, { useState } from 'react';
import { ANALYTICS_DATA } from '../../data/coffeeShopData';
import './ReportModal.css';

export default function ReportModal({ isOpen, onClose }) {
  const [timeFilter, setTimeFilter] = useState('Day');

  if (!isOpen) return null;

  return (
    <div className="report-modal-backdrop" onClick={onClose}>
      <div className="report-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Topo do Modal */}
        <div className="report-modal-header">
          <div className="report-brand">
            <span className="brand-dot"></span>
            <div>
              <h2>Green Grounds Performance & Sales Report</h2>
              <span className="report-subtitle">Resumo estatístico em tempo real das operações do caixa</span>
            </div>
          </div>

          <button type="button" className="close-report-btn" onClick={onClose} aria-label="Fechar relatório">
            ✕
          </button>
        </div>

        {/* Grade de KPIs (Total Revenue, On Progress, Performance, Today Sales) */}
        <div className="report-kpi-grid">
          {/* Card 1: Total Revenue */}
          <div className="kpi-card">
            <div className="kpi-top">
              <span className="kpi-label">Total Revenue</span>
              <button type="button" className="kpi-action-link">Details</button>
            </div>
            <div className="kpi-value-row">
              <strong className="kpi-value">${ANALYTICS_DATA.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
              <span className="kpi-badge positive">{ANALYTICS_DATA.revenueGrowth}</span>
            </div>
          </div>

          {/* Card 2: On Progress */}
          <div className="kpi-card">
            <div className="kpi-top">
              <span className="kpi-label">On Progress</span>
            </div>
            <div className="kpi-value-row">
              <strong className="kpi-value">{ANALYTICS_DATA.onProgressOrders}</strong>
              <span className="kpi-unit">Orders</span>
            </div>
          </div>

          {/* Card 3: Performance */}
          <div className="kpi-card">
            <div className="kpi-top">
              <span className="kpi-label">Performance</span>
            </div>
            <div className="kpi-value-row">
              <strong className="kpi-value">{ANALYTICS_DATA.performanceText}</strong>
              <span className="kpi-unit">{ANALYTICS_DATA.performanceFraction}</span>
            </div>
          </div>

          {/* Card 4: Today Sales */}
          <div className="kpi-card">
            <div className="kpi-top">
              <span className="kpi-label">Today Sales</span>
            </div>
            <div className="kpi-value-row">
              <strong className="kpi-value">{ANALYTICS_DATA.todaySales}</strong>
              <span className="kpi-badge positive">{ANALYTICS_DATA.todayGrowth}</span>
            </div>
          </div>
        </div>

        {/* Seção Principal: Gráfico de Linha + Radar Chart + Score de Satisfação */}
        <div className="report-charts-grid">
          {/* Coluna 1: Sales Statistic (Gráfico de Linhas SVG) */}
          <div className="chart-card sales-stat-card">
            <div className="chart-header-row">
              <div className="chart-title-wrap">
                <span className="chart-icon">📈</span>
                <h3>Sales Statistic</h3>
              </div>

              {/* Filtros de Tempo: Day, Month, Year, All */}
              <div className="time-filters-pills">
                {['Day', 'Month', 'Year', 'All'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`time-pill ${timeFilter === t ? 'active' : ''}`}
                    onClick={() => setTimeFilter(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Legenda das categorias */}
            <div className="chart-legend-row">
              <span className="legend-item"><span className="legend-dot dot-tea"></span> Tea</span>
              <span className="legend-item"><span className="legend-dot dot-coffee"></span> Coffee</span>
              <span className="legend-item"><span className="legend-dot dot-snack"></span> Snack</span>
            </div>

            {/* Gráfico SVG de Tendência de Vendas */}
            <div className="svg-chart-container">
              <svg viewBox="0 0 500 160" className="trend-svg">
                <defs>
                  <linearGradient id="coffeeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0c4a34" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0c4a34" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Linhas de grade sutis */}
                <line x1="20" y1="30" x2="480" y2="30" stroke="#e8ece5" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="20" y1="70" x2="480" y2="70" stroke="#e8ece5" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="20" y1="110" x2="480" y2="110" stroke="#e8ece5" strokeWidth="1" strokeDasharray="4 4" />

                {/* Área preenchida café */}
                <path
                  d="M 20 120 Q 80 130 140 100 T 260 70 T 360 40 T 480 30 L 480 140 L 20 140 Z"
                  fill="url(#coffeeGrad)"
                />

                {/* Linha Café (Verde Floresta) */}
                <path
                  d="M 20 120 Q 80 130 140 100 T 260 70 T 360 40 T 480 30"
                  fill="none"
                  stroke="#0c4a34"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />

                {/* Linha Chá (Coral/Salmão) */}
                <path
                  d="M 20 130 Q 90 90 160 115 T 280 85 T 390 60 T 480 75"
                  fill="none"
                  stroke="#f29982"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Linha Snack (Ocre Dourado) */}
                <path
                  d="M 20 135 Q 100 120 180 95 T 300 100 T 400 90 T 480 60"
                  fill="none"
                  stroke="#cb8e49"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Tooltip no ponto de pico */}
                <circle cx="360" cy="40" r="5" fill="#0c4a34" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="330" y="8" width="60" height="22" rx="6" fill="#0c4a34" />
                <text x="360" y="23" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">+$120.00</text>
              </svg>

              <div className="chart-time-labels">
                <span>4 AM</span>
                <span>6 AM</span>
                <span>8 AM</span>
                <span>10 AM</span>
                <span>12 PM</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Score de Satisfação (98) & Reclamações */}
          <div className="chart-card score-stat-card">
            <div className="score-header">
              <span className="chart-icon">⭐</span>
              <h3>Satisfaction Score</h3>
            </div>

            <div className="score-circle-wrap">
              <div className="score-circle-outer">
                <span className="score-big-number">{ANALYTICS_DATA.satisfactionScore}</span>
                <span className="score-ratio">{ANALYTICS_DATA.complaintsCount} order Complains</span>
              </div>
            </div>

            <div className="complaints-list">
              <div className="complaint-card warning">
                <span className="complaint-icon">⚠️</span>
                <div className="complaint-text">
                  <strong>Wrong Menu</strong>
                  <p>Customer: Andrew Tate</p>
                </div>
                <button type="button" className="btn-solve">Solve</button>
              </div>

              <div className="complaint-card danger">
                <span className="complaint-icon">⭐</span>
                <div className="complaint-text">
                  <strong>Bad Rating</strong>
                  <p>Customer: Doni Oswald</p>
                </div>
                <button type="button" className="btn-solve">Solve</button>
              </div>
            </div>
          </div>

          {/* Coluna 3: Items Performance Radar Chart (como na Imagem 2) */}
          <div className="chart-card radar-stat-card">
            <div className="radar-header">
              <span className="chart-icon">📊</span>
              <h3>Items Performance</h3>
            </div>

            <div className="radar-chart-svg-wrap">
              <svg viewBox="0 0 260 220" className="radar-svg">
                {/* Círculos concêntricos */}
                <circle cx="130" cy="110" r="80" stroke="#e0e8e2" strokeWidth="1" fill="none" />
                <circle cx="130" cy="110" r="55" stroke="#e0e8e2" strokeWidth="1" fill="none" />
                <circle cx="130" cy="110" r="30" stroke="#e0e8e2" strokeWidth="1" fill="none" />

                {/* Eixos */}
                <line x1="130" y1="30" x2="130" y2="190" stroke="#e0e8e2" strokeWidth="1" />
                <line x1="50" y1="110" x2="210" y2="110" stroke="#e0e8e2" strokeWidth="1" />
                <line x1="73" y1="53" x2="187" y2="167" stroke="#e0e8e2" strokeWidth="1" />
                <line x1="73" y1="167" x2="187" y2="53" stroke="#e0e8e2" strokeWidth="1" />

                {/* Polígono Radar com preenchimento dourado/verde suave */}
                <polygon
                  points="130,45 185,65 195,110 170,165 130,175 80,150 70,110 85,65"
                  fill="rgba(194, 214, 150, 0.45)"
                  stroke="#6d9943"
                  strokeWidth="2.2"
                />

                {/* Rótulos dos cafés */}
                <text x="130" y="24" textAnchor="middle" fontSize="9" fontWeight="600" fill="#23382c">Expresso</text>
                <text x="215" y="65" textAnchor="start" fontSize="9" fontWeight="600" fill="#23382c">Americano</text>
                <text x="220" y="115" textAnchor="start" fontSize="9" fontWeight="600" fill="#23382c">Mocha</text>
                <text x="180" y="185" textAnchor="start" fontSize="9" fontWeight="600" fill="#23382c">Expresso</text>
                <text x="130" y="205" textAnchor="middle" fontSize="9" fontWeight="600" fill="#23382c">Salted Caramel</text>
                <text x="50" y="180" textAnchor="end" fontSize="9" fontWeight="600" fill="#23382c">Flat White</text>
                <text x="45" y="115" textAnchor="end" fontSize="9" fontWeight="600" fill="#23382c">Latte</text>
                <text x="60" y="65" textAnchor="end" fontSize="9" fontWeight="600" fill="#23382c">Ice Coffee</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Tabela de Transações Recentes */}
        <div className="report-transactions-card">
          <h3 className="trans-heading">Recent Transactions</h3>
          <div className="table-responsive">
            <table className="pos-trans-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Items</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {ANALYTICS_DATA.recentTransactions.map((tx) => (
                  <tr key={tx.id}>
                    <td><strong>{tx.name}</strong></td>
                    <td className="text-muted-cell">{tx.email}</td>
                    <td className="text-muted-cell">{tx.phone}</td>
                    <td>{tx.items}</td>
                    <td><strong className="value-highlight">${tx.value.toFixed(2)}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

