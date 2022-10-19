import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList({ orders, handleDisplayOrder, activeOrder }) {
  const orderListItems = orders.map(o =>
    < OrderListItem
      order={o}
      key={o._id}
      isDisplayed={o === activeOrder}
      handleDisplayOrder={handleDisplayOrder}
    />

  )

  return (
    <main>
      {orderListItems}
    </main>
  )
}