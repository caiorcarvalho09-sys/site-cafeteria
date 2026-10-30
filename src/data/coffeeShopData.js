// Dados inspirados na interface "Green Grounds Coffee"

export const CATEGORIES_CONFIG = {
  Coffee: {
    id: 'Coffee',
    label: 'Coffee',
    itemCount: '50 items',
    badge: 'Available',
    badgeType: 'available',
    bgActive: '#0c4a34',
    textColorActive: '#ffffff',
    accentColor: '#125c42',
  },
  Tea: {
    id: 'Tea',
    label: 'Tea',
    itemCount: '20 items',
    badge: 'Available',
    badgeType: 'available',
    bgActive: '#f29982',
    textColorActive: '#23382c',
    accentColor: '#e8886f',
  },
  Snack: {
    id: 'Snack',
    label: 'Snack',
    itemCount: '10 items',
    badge: 'Need to re-stock',
    badgeType: 'warning',
    bgActive: '#cb8e49',
    textColorActive: '#ffffff',
    accentColor: '#ba7f3d',
  }
};

export const PRODUCTS = [
  // ===================== COFFEE (12 ITENS - IMAGEM 1 & 3) =====================
  {
    id: 'c1',
    name: 'Espresso',
    category: 'Coffee',
    price: 4.20,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80',
    description: 'Espresso concentrado com crema aveludada e notas intensas.',
    defaultNotes: 'Regular'
  },
  {
    id: 'c2',
    name: 'Cappuchino',
    category: 'Coffee',
    price: 3.30,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80',
    description: 'Espresso encorpado com espuma cremosa e cacau em pó.',
    defaultNotes: 'Double Shot'
  },
  {
    id: 'c3',
    name: 'Latte',
    category: 'Coffee',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80',
    description: 'Café espresso suave com leite vaporizado sedoso.',
    defaultNotes: 'Extra Sauce'
  },
  {
    id: 'c4',
    name: 'Americano',
    category: 'Coffee',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80',
    description: 'Espresso diluído em água quente, equilibrado e aromático.',
    defaultNotes: 'Less Sugar'
  },
  {
    id: 'c5',
    name: 'Mocha',
    category: 'Coffee',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=400&q=80',
    description: 'Camadas de chocolate suíço nobre, espresso e leite cremoso.',
    defaultNotes: 'Whipped Cream'
  },
  {
    id: 'c6',
    name: 'Iced Coffee Milk',
    category: 'Coffee',
    price: 3.80,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400&q=80',
    description: 'Café gelado batido com leite integral e toque de açúcar mascavo.',
    defaultNotes: 'Medium Ice'
  },
  {
    id: 'c7',
    name: 'Cold Brew',
    category: 'Coffee',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80',
    description: 'Extração a frio por 18h resultando em baixa acidez e sabor puro.',
    defaultNotes: 'No Sugar'
  },
  {
    id: 'c8',
    name: 'Flat White',
    category: 'Coffee',
    price: 3.80,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=400&q=80',
    description: 'Dose dupla de ristretto com microespuma brilhante.',
    defaultNotes: 'Oat Milk'
  },
  {
    id: 'c9',
    name: 'Caramel Mac',
    category: 'Coffee',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=400&q=80',
    description: 'Leite denso com espresso e fios fartos de calda de caramelo.',
    defaultNotes: 'Extra Caramel'
  },
  {
    id: 'c10',
    name: 'Salted Caramel',
    category: 'Coffee',
    price: 4.20,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80',
    description: 'Contraste sublime do caramelo artesanal com flor de sal e café.',
    defaultNotes: 'Less Ice'
  },
  {
    id: 'c11',
    name: 'Hazelnut Latte',
    category: 'Coffee',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80',
    description: 'Latte especial aromatizado com avelãs torradas moídas.',
    defaultNotes: 'Medium'
  },
  {
    id: 'c12',
    name: 'Pour Over',
    category: 'Coffee',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=400&q=80',
    description: 'Café coado artesanalmente no método V60 realçando notas florais.',
    defaultNotes: 'Single Origin'
  },

  // ===================== TEA (15 ITENS - IMAGEM 4) =====================
  {
    id: 't1',
    name: 'Green Jasmine Tea',
    category: 'Tea',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=400&q=80',
    description: 'Chá verde delicado aromatizado com pétalas frescas de jasmim.',
    defaultNotes: 'Hot'
  },
  {
    id: 't2',
    name: 'Earl Grey',
    category: 'Tea',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80',
    description: 'Chá preto clássico britânico com óleo essencial de bergamota.',
    defaultNotes: 'Hot'
  },
  {
    id: 't3',
    name: 'Chamomile',
    category: 'Tea',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=400&q=80',
    description: 'Flores puras de camomila colhidas à mão, calmante natural.',
    defaultNotes: 'With Honey'
  },
  {
    id: 't4',
    name: 'Peppermint Tea',
    category: 'Tea',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80',
    description: 'Folhas de hortelã-pimenta refrescante, revigorante e digestivo.',
    defaultNotes: 'Hot'
  },
  {
    id: 't5',
    name: 'Rooibos Chai',
    category: 'Tea',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=400&q=80',
    description: 'Rooibos sul-africano sem cafeína com canela, cravo e gengibre.',
    defaultNotes: 'With Milk'
  },
  {
    id: 't6',
    name: 'Hibiscus Berry Tea',
    category: 'Tea',
    price: 3.80,
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&w=400&q=80',
    description: 'Infusão vermelho-rubi de hibisco, framboesas e mirtilos silvestres.',
    defaultNotes: 'Iced'
  },
  {
    id: 't7',
    name: 'Darjeeling',
    category: 'Tea',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=400&q=80',
    description: 'Conhecido como o champanhe dos chás, sabor almiscarado e refinado.',
    defaultNotes: 'Hot'
  },
  {
    id: 't8',
    name: 'Genmaicha',
    category: 'Tea',
    price: 3.80,
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=400&q=80',
    description: 'Chá verde japonês mesclado com arroz integral tostado crocante.',
    defaultNotes: 'Hot'
  },
  {
    id: 't9',
    name: 'Sencha',
    category: 'Tea',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=400&q=80',
    description: 'O autêntico chá verde das plantações de Shizuoka no Japão.',
    defaultNotes: 'Hot'
  },
  {
    id: 't10',
    name: 'White Peony',
    category: 'Tea',
    price: 4.20,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80',
    description: 'Chá branco raro feito com brotos prateados, leveza incomparável.',
    defaultNotes: 'Hot'
  },
  {
    id: 't11',
    name: 'Lemon Ginger',
    category: 'Tea',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=400&q=80',
    description: 'Gengibre fresco com raspas de limão siciliano e mel silvestre.',
    defaultNotes: 'Hot'
  },
  {
    id: 't12',
    name: 'Moroccan Mint',
    category: 'Tea',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80',
    description: 'Chá de pólvora verde marroquino com folhas frescas de hortelã.',
    defaultNotes: 'Hot'
  },
  {
    id: 't13',
    name: 'Lapsang Souchong',
    category: 'Tea',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
    description: 'Chá preto defumado lentamente sobre brasas de madeira de pinho.',
    defaultNotes: 'Hot'
  },
  {
    id: 't14',
    name: 'Dragon Well',
    category: 'Tea',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80',
    description: 'Longjing Imperial, torrado à mão em tachos tradicionais.',
    defaultNotes: 'Hot'
  },
  {
    id: 't15',
    name: 'Lemongrass Tea',
    category: 'Tea',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80',
    description: 'Capim-santo puro aromático, cítrico e relaxante.',
    defaultNotes: 'Hot'
  },

  // ===================== SNACK (15 ITENS - IMAGEM 5) =====================
  {
    id: 's1',
    name: 'Avocado Toast',
    category: 'Snack',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=400&q=80',
    description: 'Pão sourdough artesanal, creme de avocado, sementes e flocos de pimenta.',
    defaultNotes: 'Extra Lime'
  },
  {
    id: 's2',
    name: 'Quinoa Salad',
    category: 'Snack',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
    description: 'Mix de quinoa real, tomate cereja, pepino fresco e molho de ervas.',
    defaultNotes: 'No Onion'
  },
  {
    id: 's3',
    name: 'Hummus Plate',
    category: 'Snack',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=400&q=80',
    description: 'Homus cremoso de grão-de-bico com azeite extravirgem e pão pita quente.',
    defaultNotes: 'Warm Pita'
  },
  {
    id: 's4',
    name: 'Acai Bowl',
    category: 'Snack',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=400&q=80',
    description: 'Açaí puro batido com banana, granola artesanal e lascas de coco.',
    defaultNotes: 'With Granola'
  },
  {
    id: 's5',
    name: 'Vegan Energy',
    category: 'Snack',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80',
    description: 'Bowl nutritivo com edamame, tofu grelhado, avocado e castanhas.',
    defaultNotes: 'Sesame Dressing'
  },
  {
    id: 's6',
    name: 'Spinach Feta Pastry',
    category: 'Snack',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=400&q=80',
    description: 'Folhado dourado crocante recheado com espinafre fresco e queijo feta.',
    defaultNotes: 'Warmed'
  },
  {
    id: 's7',
    name: 'Banana Bread',
    category: 'Snack',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1605698802004-94e823f68ea8?auto=format&fit=crop&w=400&q=80',
    description: 'Pão doce de banana nanica com nozes e especiarias aquecidas.',
    defaultNotes: 'With Butter'
  },
  {
    id: 's8',
    name: 'Quiche Lorraine',
    category: 'Snack',
    price: 3.80,
    image: 'https://images.unsplash.com/photo-1621236378699-8597fee6a1ce?auto=format&fit=crop&w=400&q=80',
    description: 'Massa brisée crocante com queijo gruyère e bacon artesanal defumado.',
    defaultNotes: 'Warmed'
  },
  {
    id: 's9',
    name: 'Coconut Macaroons',
    category: 'Snack',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80',
    description: 'Macarons de coco ralado úmido dourados por fora com calda.',
    defaultNotes: '4 pcs'
  },
  {
    id: 's10',
    name: 'Greek Yogurt Parfait',
    category: 'Snack',
    price: 4.20,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80',
    description: 'Iogurte grego artesanal denso com coulis de frutas vermelhas frescas.',
    defaultNotes: 'Honey on Top'
  },
  {
    id: 's11',
    name: 'Cheese Scones',
    category: 'Snack',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
    description: 'Scones britânicos de queijo cheddar curado servidos quentinhos.',
    defaultNotes: 'Warmed'
  },
  {
    id: 's12',
    name: 'Sweet Potato Fries',
    category: 'Snack',
    price: 3.80,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80',
    description: 'Batata-doce rústica assada com alecrim e páprica defumada.',
    defaultNotes: 'Garlic Aioli'
  },
  {
    id: 's13',
    name: 'Almond Butter',
    category: 'Snack',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=400&q=80',
    description: 'Torradas integrais com pasta de amêndoas pura e fatias de morango.',
    defaultNotes: 'Extra Berries'
  },
  {
    id: 's14',
    name: 'Veggie Plate',
    category: 'Snack',
    price: 3.80,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80',
    description: 'Crudités de cenoura, pepino e rabanete acompanhados de dip tártaro.',
    defaultNotes: 'Fresh Dip'
  },
  {
    id: 's15',
    name: 'Blueberry Muffin',
    category: 'Snack',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=400&q=80',
    description: 'Muffin fofinho recheado com mirtilos frescos e farofa crocante.',
    defaultNotes: 'Warmed'
  }
];

// Pedido inicial pré-carregado igual ao da imagem (Purchase Receipt #27362)
export const INITIAL_ORDER_ITEMS = [
  {
    id: 'c4',
    name: 'Americano',
    price: 4.20,
    quantity: 2,
    size: 'Medium',
    note: 'Less Sugar',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'c1',
    name: 'Espresso',
    price: 5.30,
    quantity: 1,
    size: 'Regular',
    note: 'Standard',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'c3',
    name: 'Latte',
    price: 4.00,
    quantity: 3,
    size: 'Large',
    note: 'Extra Sauce',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80',
  }
];

// Dados estatísticos do Relatório (Imagem 2)
export const ANALYTICS_DATA = {
  totalRevenue: 2357.00,
  revenueGrowth: '+2%',
  onProgressOrders: 10,
  performanceText: 'Good',
  performanceFraction: '2/24',
  todaySales: 234,
  todayGrowth: '+2%',
  satisfactionScore: 98,
  complaintsCount: '2/98',
  complaints: [
    { id: 1, type: 'Wrong Menu', customer: 'Andrew Tate', severity: 'warning' },
    { id: 2, type: 'Bad Rating', customer: 'Doni Oswald', severity: 'danger' }
  ],
  radarMetrics: [
    { label: 'Expresso', value: 85 },
    { label: 'Americano', value: 92 },
    { label: 'Mocha', value: 70 },
    { label: 'Salted Caramel', value: 88 },
    { label: 'Flat White', value: 65 },
    { label: 'Latte', value: 95 },
    { label: 'Ice Coffee', value: 80 },
  ],
  recentTransactions: [
    { id: 'tx1', name: 'John Doe', email: 'smithjohn@gmail.com', phone: '+1 234567890', items: 'Tea, Snack, Coffee', value: 20.00 },
    { id: 'tx2', name: 'Samantha Smith', email: 'sam@gmail.com', phone: '+1 2512345678', items: 'Coffee, Tea, Snack', value: 24.00 },
    { id: 'tx3', name: 'William Brown', email: 'john@gmail.com', phone: '+1 2498765432', items: 'Coffee, Tea, Snack', value: 24.00 },
    { id: 'tx4', name: 'Emma Watson', email: 'emma@gmail.com', phone: '+1 2287654321', items: 'Snack, Coffee, Tea', value: 14.00 }
  ]
};

