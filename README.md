# ☕ Green Grounds Coffee - POS & Web Ordering System

Interface moderna e elegante para cafeteria inspirada nas referências visuais de UI/UX enviadas (**Green Grounds Coffee**). Desenvolvida em **React** e **Vite**, trazendo um sistema completo de Ponto de Venda (POS), cardápio interativo e painel de análise de desempenho.

---

## 📸 Fidelidade Visual às Imagens

O projeto foi construído reproduzindo os detalhes das 5 telas anexadas:

1. **Catálogo & Tela Principal (Imagens 1 e 3)**:
   - Identidade visual **GREEN GROUNDS COFFEE** com logotipo circular e tipografia moderna.
   - Cabeçalho com data dinâmica, contador de pedidos abertos, botão de relatório, sino de notificações e avatar do caixa (*Samantha W / Cashier*).
   - Campo de pesquisa em formato pílula com atalho `⌘` para filtragem instantânea.
   - Navegação por categorias em cartões hero (*Coffee*, *Tea*, *Snack*) com marcas d'água vetoriais artísticas (*Latte Art*, bule de chá e croissant).
   - Grade de produtos com imagens cristalinas, preços e o botão circular `+`.
   - **Badges de quantidade no card (`1`, `2`, `3`)** quando um item está adicionado ao pedido.

2. **Tema Coral para Categoria Tea (Imagem 4)**:
   - Ao selecionar a categoria **Tea**, o cartão ganha a cor de destaque coral/salmão suave (`#f29982`).
   - Cardápio atualizado com os 15 chás artesanais (*Green Jasmine Tea*, *Earl Grey*, *Chamomile*, *Hibiscus Berry*, *Darjeeling*, etc.).

3. **Tema Caramelo/Ocre para Categoria Snack (Imagem 5)**:
   - Ao selecionar **Snack**, o cartão ganha a cor caramelo mel/ocre (`#cb8e49`) com a tag *"Need to re-stock ⓘ"*.
   - 15 opções de lanches e confeitarias artesanais (*Avocado Toast*, *Quinoa Salad*, *Hummus Plate*, *Acai Bowl*, *Banana Bread*, *Cheese Scones*, etc.).

4. **Painel Lateral "Purchase Receipt #27362"**:
   - Alternador de tipo de pedido: `[ Dine In ]`, `[ Take Away ]`, `[ Order Online ]`.
   - Identificação do cliente (*Customer name: Muadz*) e seleção de mesa (*Table: B12 - Indoor*).
   - Lista do pedido com fotos, preços, controles de quantidade `[ - 2 + ]` e etiquetas de observações clicáveis (ex: `📄 Less Sugar`, `📄 Extra Sauce`).
   - Detalhes de pagamento: Subtotal, Taxa (10%) e Total.
   - Botão de ação: `[ → ] Place Order $XX.XX [ >> ]`.
   - Botão circular `>` para recolher ou expandir a barra lateral.

5. **Painel de Relatório & Analytics (Imagem 2)**:
   - Acessível pelo botão **"Report"** no topo da tela.
   - Indicadores de topo: *Total Revenue ($2,357.00 +2%)*, *On Progress (10 Orders)*, *Performance (Good 2/24)* e *Today Sales (234 +2%)*.
   - Gráfico de linhas SVG de **Estatística de Vendas** (*Sales Statistic*) com filtros de período (*Day*, *Month*, *Year*, *All*) e categorias.
   - **Score de Satisfação (98)** com central de resolução de reclamações (*Wrong Menu*, *Bad Rating*).
   - **Radar Chart SVG de Desempenho de Itens** (*Items Performance*: Expresso, Americano, Mocha, Salted Caramel, Flat White, Latte, etc.).
   - Tabela de transações recentes.

6. **Customização & Emissão de Comprovante**:
   - Modal para editar tamanho da xícara (*Regular*, *Medium*, *Large*), nível de açúcar (*Less Sugar*, *No Sugar*, etc.) e escolha de leite (*Oat Milk*, *Almond Milk*, etc.).
   - Modal de recibo finalizado com botão de impressão térmica do pedido e envio para o WhatsApp.

---

## 📁 Estrutura do Projeto

```text
site para cafeteria/
├── public/
│   └── coffee-cup.svg                     # Favicon do Green Grounds Coffee
├── src/
│   ├── components/
│   │   ├── Header/                        # Barra superior com logo, data e perfil
│   │   ├── SearchBar/                     # Busca pílula com atalho ⌘
│   │   ├── CategoryNav/                   # 3 Cards Hero (Coffee, Tea, Snack)
│   │   ├── ProductGrid/                   # Grade e cards com badges de quantidade
│   │   ├── ReceiptSidebar/                # Lateral do recibo #27362 e checkout
│   │   ├── ReportModal/                   # Dashboard completo com gráficos (Imagem 2)
│   │   ├── ItemCustomizer/                # Modal de opções e personalização
│   │   └── OrderSuccessModal/             # Recibo térmico finalizado e impressão
│   ├── data/
│   │   └── coffeeShopData.js              # Todos os itens, categorias e dados estatísticos
│   ├── App.jsx                            # Estado global e orquestração do POS
│   ├── App.css                            # Layout responsivo e moldura do dispositivo
│   ├── index.css                          # Variáveis de cores, reset e fontes
│   └── main.jsx                           # Ponto de montagem React
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Como Executar

### 1. Pré-requisito: Node.js
Certifique-se de ter o **Node.js** instalado ([nodejs.org](https://nodejs.org/)).

### 2. Instalar e Rodar
No terminal da pasta do projeto:

```bash
# Instalar pacotes
npm install

# Rodar servidor local
npm run dev
```

Abra o endereço exibido no navegador:
👉 **`http://localhost:3000`**
