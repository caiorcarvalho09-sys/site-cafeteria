import React, { useState } from 'react';
import './ReceiptSidebar.css';

export default function ReceiptSidebar({
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  onOpenEditNote,
  onPlaceOrder,
  isOpen,
  onToggleOpen
}) {
  const [orderType, setOrderType] = useState('Dine In');
  const [customerName, setCustomerName] = useState('Muadz');
  const [table, setTable] = useState('B12 - Indoor');

  // Cálculo financeiro
  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.10; // Taxa padrão 10%
  const total = subtotal + tax;

  const formatPrice = (val) => {
    return `$${val.toFixed(2)}`;
  };

  return (
    <aside className={`receipt-sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      {/* Botão de recolher/expandir lateral */}
      <button 
        type="button" 
        className="sidebar-toggle-btn" 
        onClick={onToggleOpen}
        title={isOpen ? "Recolher painel" : "Expandir painel"}
        aria-label="Alternar painel lateral"
      >
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={isOpen ? '' : 'icon-rotated'}
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="receipt-content">
          {/* Cabeçalho do Recibo */}
          <div className="receipt-header">
            <div className="receipt-title-wrap">
              <h3 className="receipt-title">Purchase Receipt</h3>
              <span className="receipt-id">#27362</span>
            </div>
            
            <button type="button" className="receipt-action-icon" title="Opções de recibo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Abas: Dine In / Take Away / Order Online */}
          <div className="order-type-tabs">
            {['Dine In', 'Take Away', 'Order Online'].map((type) => (
              <button
                key={type}
                type="button"
                className={`order-type-btn ${orderType === type ? 'active' : ''}`}
                onClick={() => setOrderType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Detalhes do Cliente e Mesa */}
          <div className="customer-details-row">
            <div className="input-group">
              <label>Customer name</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Name"
                className="pill-input"
              />
            </div>

            <div className="input-group">
              <label>Table</label>
              <select
                value={table}
                onChange={(e) => setTable(e.target.value)}
                className="pill-input pill-select"
              >
                <option value="B12 - Indoor">B12 - Indoor</option>
                <option value="B08 - Indoor">B08 - Indoor</option>
                <option value="A04 - Terrace">A04 - Terrace</option>
                <option value="C02 - Garden">C02 - Garden</option>
                <option value="VIP - Lounge">VIP - Lounge</option>
              </select>
            </div>
          </div>

          {/* Lista de Itens do Pedido */}
          <div className="order-list-section">
            <h4 className="order-list-heading">Order list</h4>

            {orderItems.length === 0 ? (
              <div className="empty-order-state">
                <span className="empty-bag-icon">🛍️</span>
                <p>Nenhum item adicionado ainda.</p>
                <small>Selecione cafés, chás ou lanches do catálogo.</small>
              </div>
            ) : (
              <div className="order-items-scroll">
                {orderItems.map((item) => (
                  <div key={item.id} className="receipt-item-card">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="receipt-item-thumb" 
                    />

                    <div className="receipt-item-info">
                      <div className="item-title-row">
                        <strong className="item-title">{item.name}</strong>
                        <span className="item-subtotal">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>

                      <div className="item-meta-text">
                        {formatPrice(item.price)} x{item.quantity} • {item.size || 'Medium'}
                      </div>

                      {/* Nota customizada (ex: Less Sugar, Extra Sauce) */}
                      <button 
                        type="button" 
                        className="item-note-pill"
                        onClick={() => onOpenEditNote && onOpenEditNote(item)}
                        title="Clique para editar observações do item"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <span>{item.note || 'Notes'}</span>
                      </button>

                      {/* Controles de Quantidade (- 2 +) */}
                      <div className="item-qty-row">
                        <div className="qty-pill-controls">
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            aria-label="Diminuir quantidade"
                          >
                            –
                          </button>
                          <span className="qty-number">{item.quantity}</span>
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            aria-label="Aumentar quantidade"
                          >
                            +
                          </button>
                        </div>

                        <button 
                          type="button" 
                          className="item-remove-btn" 
                          onClick={() => onRemoveItem(item.id)}
                          title="Remover item"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Detalhes do Pagamento (Payment Details) */}
          <div className="payment-details-box">
            <h4 className="payment-details-heading">Payment Details</h4>
            
            <div className="payment-row">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>

            <div className="payment-row">
              <span>Tax (10%)</span>
              <strong>{formatPrice(tax)}</strong>
            </div>

            <div className="payment-row total-row">
              <span>Total</span>
              <strong className="total-value">{formatPrice(total)}</strong>
            </div>

            {/* Botão Principal: [ → ] Place Order $XX.XX [ >> ] */}
            <button
              type="button"
              className="place-order-btn"
              disabled={orderItems.length === 0}
              onClick={() => onPlaceOrder({
                orderType,
                customerName,
                table,
                items: orderItems,
                subtotal,
                tax,
                total
              })}
            >
              <span className="btn-left-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>

              <span className="btn-center-label">
                Place Order {formatPrice(total)}
              </span>

              <span className="btn-right-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="13 17 18 12 13 7"></polyline>
                  <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

