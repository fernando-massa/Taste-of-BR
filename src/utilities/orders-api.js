import sendRequest from './send-request';

const BASE_URL = '/api/orders';

//const BASE_URL = 'DATABASE_URL=mongodb+srv://mongoDBtest:mongo12345@cluster0.21dhgcj.mongodb.net/brazilianmarket?retryWrites=true&w=majority'


export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}


export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getOrderForUser() {
  return sendRequest(`${BASE_URL}/order-history`);
}