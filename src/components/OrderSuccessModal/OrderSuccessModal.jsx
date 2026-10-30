import React from 'react';
import './OrderSuccessModal.css';

export default function OrderSuccessModal({ orderData, isOpen, onClose, onNewOrder }) {
  if (!isOpen || !orderData) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsApp = () => {
    let msg = `*☕ PEDIDO GREEN GROUNDS COFFEE (#27362)*\n`;
    msg += `*Cliente:* ${orderData.customerName} | *Tipo:* ${orderData.orderType} (${orderData.table})\n\n`;
    orderData.items.forEach(i => {
      msg += `• ${i.quantity}x ${i.name} (${i.size || 'Medium'}) - $${(i.price * i.quantity).toFixed(2)}\n`;
      if (i.note) msg += `   _Obs: ${i.note}_\n`;
    });
    msg += `\n*Subtotal:* $${orderData.subtotal.toFixed(2)}`;
    msg += `\n*Tax (10%):* $${orderData.tax.toFixed(2)}`;
    msg += `\n*TOTAL:* $${orderData.total.toFixed(2)}\n\nObrigado pela preferência!`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="order-modal-backdrop" onClick={onClose}>
      <div className="order-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Ícone de Sucesso */}
        <div className="order-success-icon-wrap">
          <div className="order-check-circle">✓</div>
        </div>

        <h2 className="order-success-title">Order Placed Successfully!</h2>
        <p className="order-success-sub">Order ticket #27362 has been sent to the barista kitchen bar.</p>

        {/* Recibo Impresso Estilizado */}
        <div className="paper-receipt">
          <div className="paper-receipt-header">
            <h4>GREEN GROUNDS COFFEE</h4>
            <p>128 Artisan Street • Terminal POS #01</p>
            <div className="receipt-meta">
              <span>{orderData.orderType} • {orderData.table}</span>
              <span>Cust: {orderData.customerName}</span>
            </div>
          </div>

          <div className="paper-receipt-items">
            {orderData.items.map((item, idx) => (
              <div key={idx} className="paper-item-row">
                <div className="paper-item-left">
                  <span className="paper-item-name">{item.quantity}x {item.name}</span>
                  {item.note && <small className="paper-item-note">{item.note}</small>}
                </div>
                <strong className="paper-item-price">${(item.price * item.quantity).toFixed(2)}</strong>
              </div>
            ))}
          </div>

          <div className="paper-receipt-totals">
            <div className="paper-total-row">
              <span>Subtotal:</span>
              <span>${orderData.subtotal.toFixed(2)}</span>
            </div>
            <div className="paper-total-row">
              <span>Tax (10%):</span>
              <span>${orderData.tax.toFixed(2)}</span>
            </div>
            <div className="paper-total-row final-total">
              <span>TOTAL:</span>
              <strong>${orderData.total.toFixed(2)}</strong>
            </div>
          </div>

          <div className="paper-receipt-barcode">
            <div className="barcode-lines">||| | |||| | ||| |||| | || |||</div>
            <small>THANK YOU FOR YOUR VISIT</small>
          </div>
        </div>

        {/* Ações */}
        <div className="order-modal-actions">
          <button type="button" className="btn-print" onClick={handlePrint}>
            <span>🖨️</span> Print Ticket
          </button>
          <button type="button" className="btn-wa" onClick={handleWhatsApp}>
            <span>💬</span> WhatsApp
          </button>
          <button type="button" className="btn-new-order" onClick={onNewOrder}>
            New Order
          </button>
        </div>
      </div>
    </div>
  );
}

