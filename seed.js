require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function () {

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Appetizers', sortOrder: 10 },
    { name: 'Plates', sortOrder: 20 },
    { name: 'Beverages', sortOrder: 30 },
    { name: 'Dessert', sortOrder: 40 },
    { name: 'Market Dry Goods', sortOrder: 50 },
    { name: 'Butcher Shop', sortOrder: 60 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    //  Appetizers
    { name: 'Cheese bread', productImg: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/3/28/0/FNK_Pao-De-Queijo_s4x3.jpg.rend.hgtvcom.826.620.suffix/1459253915059.jpeg', category: categories[0], price: 5.99 },
    { name: 'Crab Cakes on Shell', productImg: 'https://cdn.tasteatlas.com/images/dishes/1f14fe7b97d6432db877d38cb7c2ad2c.jpg?mw=1300', category: categories[0], price: 4.99 },
    { name: 'Coxinha - Chicken Croquettes', productImg: 'https://www.hojetemfrango.com.br/wp-content/uploads/2018/12/coxinha-de-frango-especial-seara.jpg', category: categories[0], price: 8.99 },
    { name: 'Fried Yucca', productImg: 'https://www.crumbsnatched.com/wp-content/uploads/2022/08/mandioca-frita-cassava-fries-serve.jpg', category: categories[0], price: 6.99 },
    { name: 'French Fries', productImg: 'https://www.nestleprofessional.com.br/sites/default/files/styles/recipe/public/media/batata-frita-feitas-com-maggi.jpg?itok=uNN1fPra', category: categories[0], price: 6.99 },
    { name: 'Brazilian Fried Chicken', productImg: 'https://guiadacozinha.com.br/wp-content/uploads/2020/12/frango-frito-com-alho.jpg', category: categories[0], price: 12.99 },

    // Plates
    { name: 'Skirt Steak', productImg: 'https://www.steaksandgame.com/images/product/large/130_1_.jpg', category: categories[1], price: 15.99 },
    { name: 'Grilled Meat Combo', productImg: 'https://www.univision.com/proxy/api/cached/picture?href=https%3A%2F%2Fst1.uvnimg.com%2F3d%2F28%2F5601ad8e4d32a7272e3b7a8d8110%2Fchurrasco-0522.jpg&width=1669&height=939&ratio_width=1240&ratio_height=698&format=webp', category: categories[1], price: 22.99 },
    { name: 'Feijoada - Black Bean Stew', productImg: 'https://hilahcooking.com/wp-content/uploads/2017/06/feijoada-recipe.jpg', category: categories[1], price: 10.99 },
    { name: 'Tropeiro Beans', productImg: 'https://www.oliviascuisine.com/wp-content/uploads/2016/07/feijao-tropeiro-close-up.jpg', category: categories[1], price: 11.99 },
    { name: 'Shrimp with Coconut-Sauce', productImg: 'https://www.oliviascuisine.com/wp-content/uploads/2016/07/One-Pot-Shrimp-in-Coconut-Sauce-3-FromBrazilToYou.Org_-678x1024.jpg', category: categories[1], price: 13.99 },

    // Beverages
    { name: 'Fresh Brazilian Lemonade', productImg: 'https://www.oliviascuisine.com/wp-content/uploads/2016/07/limonada-suica.jpg', category: categories[2], price: 2.99 },
    { name: 'Fresh Passion Fruit Juice', productImg: 'https://receitinhas.com.br/wp-content/uploads/2017/09/Passion-Fruit-Juice.jpg', category: categories[2], price: 2.99 },
    { name: 'Caipirinha', productImg: 'https://www.oliviascuisine.com/wp-content/uploads/2020/09/caipirinha.jpg', category: categories[2], price: 11.99 },
    { name: 'Guarana Antartica', productImg: 'https://www.grocery.com/store/image/cache/catalog/guaran%C3%A1-antarctica/guaran%C3%A1-antarctica-the-brazilian-original-guaran%C3%A1--B0083TLAEK-600x600.jpg', category: categories[2], price: 1.99 },
    
    //Dessert
    { name: 'Chocolate Fudge Balls', productImg: 'https://www.oliviascuisine.com/wp-content/uploads/2014/09/brigadeiro3.jpg', category: categories[3], price: 5.99 },
    { name: 'Coconut Fudge Balls', productImg: 'https://www.oliviascuisine.com/wp-content/uploads/2016/07/beijinho.jpg', category: categories[3], price: 5.99 },
    { name: 'Passion Fruit Mousse', productImg: 'https://www.oliviascuisine.com/wp-content/uploads/2020/07/passion-fruit-mousse-1-683x1024.jpg', category: categories[3], price: 6.99 },
    { name: 'Brazilian Flan', productImg: 'https://media-cdn.tripadvisor.com/media/photo-s/07/b2/c1/0f/tushar-brazilian-express.jpg', category: categories[3], price: 5.99 },

    // Market Dry Goods
    { name: 'Guarana Antartica - 12 pack', productImg: 'https://cdn.shopify.com/s/files/1/0072/8956/9362/products/GuaranaAntarcticaLata350ml12un_700x.jpg?v=1613258338', category: categories[4], price: 12.99 },
    { name: 'Cheese Bread Mix', productImg: 'https://cdn.shopify.com/s/files/1/0072/8956/9362/products/MisturadePaodeQueijoYoki250g_700x.jpg?v=1613274140', category: categories[4], price: 3.99 },
    { name: 'Matte Tea', productImg: 'https://cdn.shopify.com/s/files/1/0072/8956/9362/products/Cha-Mate-a-Granel-Matte-Leao-100g_700x.jpg?v=1664562291', category: categories[4], price: 2.99 },
    { name: 'Bis Chocolate', productImg: 'https://cdn.shopify.com/s/files/1/0600/8736/9980/products/Lacta-Bis-Leite-Everyday-Brazil_521x521.png?v=1665154210', category: categories[4], price: 6.99 },
    { name: 'Peanut Brown Sugar Paçoca', productImg: 'https://cdn.shopify.com/s/files/1/0600/8736/9980/products/Da_Colonia_Pacoca_Rolha_Acucar_Mascavo_210g__06798_521x521.jpg?v=1633383944', category: categories[4], price: 7.99 },

    // Butcher Shop
    { name: 'Brazilian Spicy Pork Sausage', productImg: 'https://cdn.shopify.com/s/files/1/2530/7762/products/3701-chorizo-argentino-0005_720x720.jpg?v=1571713016', category: categories[5], price: 5.99 },
    { name: 'Spicy Chicken', productImg: 'https://static8.depositphotos.com/1094509/1025/i/450/depositphotos_10251182-stock-photo-spicy-raw-chicken.jpg', category: categories[5], price: 7.99 },
    { name: 'Picanha', productImg: 'https://beef2live.com/images/668/author/995/2015/2/brazilian_beef_cuts_1_635584605619312744.jpg', category: categories[5], price: 12.99 },
    { name: 'Skirt Steak', productImg: 'https://www.otalhodovasco.pt/wp-content/uploads/2020/06/Fraldinha-copy.jpg', category: categories[5], price: 10.99 },

  ]);

  console.log(items)

  process.exit();

})();