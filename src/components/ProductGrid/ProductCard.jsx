import React from 'react';

export default function ProductCard({ product, inCartQuantity, onAddToCart, onOpenCustomize }) {
  const isAdded = inCartQuantity > 0;

  return (
    <div className={`pos-product-card ${isAdded ? 'has-items' : ''}`}>
      {/* Badge de quantidade no canto superior direito (como na imagem 1: 1, 3, 2) */}
      {isAdded && (
        <span className="product-qty-badge" title={`${inCartQuantity} na sacola`}>
          {inCartQuantity}
        </span>
      )}

      {/* Imagem do Produto centralizada */}
      <div 
        className="product-image-wrap" 
        onClick={() => onOpenCustomize ? onOpenCustomize(product) : onAddToCart(product)}
        title="Clique para ver detalhes / adicionar"
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-img"
          loading="lazy" 
        />
      </div>

      {/* Rodapé do Card: Nome, Preço e Botão + */}
      <div className="product-card-bottom">
        <div className="product-info-left">
          <h3 className="product-name" title={product.name}>{product.name}</h3>
          <span className="product-price">${product.price.toFixed(product.price % 1 === 0 ? 1 : 2)}</span>
        </div>

        <button
          type="button"
          className={`product-plus-btn ${isAdded ? 'active-plus' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          aria-label={`Adicionar ${product.name}`}
          title="Adicionar à sacola"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}

