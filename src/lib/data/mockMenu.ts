export const mockCategories = [
  { id: 'c1', name: 'Bread', slug: 'bread' },
  { id: 'c2', name: 'Appetisers', slug: 'appetisers' },
  { id: 'c3', name: 'Burgers', slug: 'burgers' },
  { id: 'c4', name: 'Espresso Bar', slug: 'espresso-bar' },
  { id: 'c5', name: 'Cold Coffee', slug: 'cold-coffee' },
  { id: 'c6', name: 'Pasta & Risotto', slug: 'pasta-risotto' },
  { id: 'c7', name: 'Pastries & Desserts', slug: 'pastries-desserts' },
  { id: 'c8', name: 'Gelato', slug: 'gelato' },
];

export const mockProducts = [
  // Bread
  { id: 'p1', category_id: 'c1', name: 'Avo-guacamole Toast', description: 'Fresh avocado on toasted sourdough.', price: 250, is_veg: true, is_bestseller: true },
  { id: 'p2', category_id: 'c1', name: 'Chilly Cheese Toast', description: 'Classic cheesy toast with a spicy kick.', price: 180, is_veg: true, is_bestseller: false },
  
  // Appetisers
  { id: 'p3', category_id: 'c2', name: 'Cheese & Herb Mushroom Croquettes', description: 'Crispy croquettes filled with earthy mushrooms and gooey cheese.', price: 290, is_veg: true, is_bestseller: true },
  { id: 'p4', category_id: 'c2', name: 'Korean Gochujang Wings', description: 'Spicy and sweet gochujang glazed chicken wings.', price: 320, is_veg: false, is_bestseller: false },
  
  // Espresso Bar
  { id: 'p5', category_id: 'c4', name: 'Cappuccino', description: 'Rich espresso with steamed milk foam.', price: 160, is_veg: true, is_bestseller: true },
  { id: 'p6', category_id: 'c4', name: 'Americano', description: 'Classic espresso diluted with hot water.', price: 140, is_veg: true, is_bestseller: false },
  
  // Cold Coffee
  { id: 'p7', category_id: 'c5', name: 'Dubai Pistachio Kunafa', description: 'Viral sensation cold coffee with kunafa crunch and pistachio.', price: 350, is_veg: true, is_new: true, is_bestseller: true },
  { id: 'p8', category_id: 'c5', name: 'Classic Cold Coffee', description: 'Thick, creamy, and perfectly sweet.', price: 180, is_veg: true, is_bestseller: false },
  
  // Pastries & Desserts
  { id: 'p9', category_id: 'c7', name: 'Pistachio Basque Cheesecake', description: 'Creamy Basque cheesecake with rich pistachio flavor.', price: 380, is_veg: true, is_bestseller: true },
  { id: 'p10', category_id: 'c7', name: 'Nutella Ferrero Rocher Cheesecake', description: 'Decadent chocolate hazelnut delight.', price: 360, is_veg: true, is_bestseller: false },
  
  // Pasta
  { id: 'p11', category_id: 'c6', name: 'Pesto Risotto', description: 'Creamy arborio rice with fresh basil pesto.', price: 420, is_veg: true, is_bestseller: true },
];
