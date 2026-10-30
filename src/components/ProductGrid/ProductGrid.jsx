import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

export default function ProductGrid({ 
  products, 
  cartItems, 
  onAddToCart, 
  onOpenCustomize,
  activeCategory,
  searchTerm 
}) {
  // Obter quantidade na sacola por ID do produto
  const getCartQuantity = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section className="product-grid-section">
      {products.length === 0 ? (
        <div className="empty-catalog-state">
          <div className="empty-catalog-icon">🍃</div>
          <h3>No products found</h3>
          <p>
            {searchTerm 
              ? `No items match "${searchTerm}" in ${activeCategory}.`
              : 'There are no items currently listed in this category.'}
          </p>
        </div>
      ) : (
        <div className="pos-products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              inCartQuantity={getCartQuantity(product.id)}
              onAddToCart={onAddToCart}
              onOpenCustomize={onOpenCustomize}
            />
          ))}
        </div>
      )}
    </section>
  );
}

