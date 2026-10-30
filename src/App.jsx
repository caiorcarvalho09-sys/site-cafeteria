import React, { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryNav from './components/CategoryNav/CategoryNav';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ReceiptSidebar from './components/ReceiptSidebar/ReceiptSidebar';
import ReportModal from './components/ReportModal/ReportModal';
import ItemCustomizerModal from './components/ItemCustomizer/ItemCustomizerModal';
import OrderSuccessModal from './components/OrderSuccessModal/OrderSuccessModal';
import { PRODUCTS, INITIAL_ORDER_ITEMS } from './data/coffeeShopData';
import './App.css';

export default function App() {
  // Estado da categoria ativa (Coffee, Tea, Snack)
  const [activeCategory, setActiveCategory] = useState('Coffee');
  
  // Campo de busca
  const [searchTerm, setSearchTerm] = useState('');

  // Itens do Pedido no Carrinho (Iniciado com os mesmos itens da imagem do recibo #27362)
  const [orderItems, setOrderItems] = useState(INITIAL_ORDER_ITEMS);

  // Contador total de pedidos finalizados
  const [totalOrders, setTotalOrders] = useState(20);

  // Modais e painel lateral
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [customizingItem, setCustomizingItem] = useState(null);
  const [completedOrder, setCompletedOrder] = useState(null);

  // Filtragem dos produtos
  const displayedProducts = PRODUCTS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (searchTerm.trim() !== '') {
      return matchesSearch;
    }
    return item.category === activeCategory;
  });

  // Adicionar produto ao pedido
  const handleAddToCart = (product) => {
    setOrderItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === product.id);
      if (existingIndex > -1) {
        return prev.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          size: 'Medium',
          note: product.defaultNotes || 'Standard',
          image: product.image,
        },
      ];
    });
  };

  // Alterar quantidade (+ / -)
  const handleUpdateQuantity = (id, delta) => {
    setOrderItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Remover item
  const handleRemoveItem = (id) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Salvar customização de item
  const handleSaveCustomization = (updatedItem) => {
    setOrderItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  // Finalizar Pedido
  const handlePlaceOrder = (orderSummary) => {
    setCompletedOrder(orderSummary);
    setTotalOrders((count) => count + 1);
  };

  // Limpar para novo pedido
  const handleNewOrder = () => {
    setCompletedOrder(null);
    setOrderItems([]);
  };

  return (
    <div className="app-viewport-wrapper">
      {/* Moldura / Tablet POS Window */}
      <div className="pos-device-frame">
        {/* Topo do Sistema */}
        <Header
          totalOrders={totalOrders}
          onOpenReport={() => setIsReportOpen(true)}
          notificationCount={1}
        />

        {/* Corpo Principal com Catálogo e Sidebar de Recibo */}
        <div className="pos-body-layout">
          {/* Lado Esquerdo: Catálogo de Produtos e Categorias */}
          <main className="pos-catalog-column">
            {/* Barra de Pesquisa com atalho ⌘ */}
            <SearchBar
              value={searchTerm}
              onChange={(val) => setSearchTerm(val)}
            />

            {/* Navegação de Categorias Hero Cards (Coffee, Tea, Snack) */}
            <CategoryNav
              activeCategory={activeCategory}
              onSelectCategory={(cat) => {
                setActiveCategory(cat);
                setSearchTerm('');
              }}
            />

            {/* Grid dos Produtos com foto e botão + */}
            <ProductGrid
              products={displayedProducts}
              cartItems={orderItems}
              onAddToCart={handleAddToCart}
              onOpenCustomize={(product) => {
                // Se já estiver no carrinho, abre para customizar
                const inCart = orderItems.find((i) => i.id === product.id);
                if (inCart) {
                  setCustomizingItem(inCart);
                } else {
                  handleAddToCart(product);
                }
              }}
              activeCategory={activeCategory}
              searchTerm={searchTerm}
            />
          </main>

          {/* Lado Direito: Purchase Receipt Sidebar */}
          <ReceiptSidebar
            orderItems={orderItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onOpenEditNote={(item) => setCustomizingItem(item)}
            onPlaceOrder={handlePlaceOrder}
            isOpen={isSidebarOpen}
            onToggleOpen={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
      </div>

      {/* MODAL 1: Dashboard de Relatórios & Analytics (Imagem 2) */}
      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />

      {/* MODAL 2: Customização de Tamanho, Açúcar e Notas do Item */}
      <ItemCustomizerModal
        item={customizingItem}
        isOpen={Boolean(customizingItem)}
        onClose={() => setCustomizingItem(null)}
        onSave={handleSaveCustomization}
      />

      {/* MODAL 3: Recibo Impresso & Sucesso do Pedido */}
      <OrderSuccessModal
        orderData={completedOrder}
        isOpen={Boolean(completedOrder)}
        onClose={() => setCompletedOrder(null)}
        onNewOrder={handleNewOrder}
      />
    </div>
  );
}
