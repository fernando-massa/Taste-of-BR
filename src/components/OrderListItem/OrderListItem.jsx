import './OrderListItem.css'

export default function OrderListItem({ order, handleDisplayOrder, isDisplayed }) {
  const orderDate = new Date(order.createdAt).toLocaleDateString();

  
  return (
    <div className={`OrderListItem ${isDisplayed ? ' selected' : ''}`}  onClick={() => handleDisplayOrder(order)}>
      <div className="left">
        <div className="orderId">ORDER &nbsp; - &nbsp;<span>{order.orderId}</span></div>
        <div className="orderDate bottom">{orderDate}</div>
      </div>
      <div className="right">
        <div className="orderTotal">${order.orderTotal.toFixed(2)}</div>
        <div className="totalQty bottom">{order.totalQty} Item{order.totalQty > 1 && 's'}</div>
      </div>
    </div>
  );
}