import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import * as ordersAPI from "../../utilities/orders-api";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import OrderList from "../../components/OrderList/OrderList";

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getOrderForUser();
      setOrders(orders);
      setActiveOrder(orders[0] || null);
    }
    getOrders();
  }, []);

  async function handleDisplayOrder(order) {
    setActiveOrder(order);
  }

  return (
    <>
    <header>
      <Link id="back-to-shopping" to="/"> Back To Shopping</Link>
      <div className="UserLogOut">
      <UserLogOut user={user} setUser={setUser}/>
      </div>
    </header>
      <h1 className='title'>{user.name}'s Order History </h1>
      {orders.length ? 
    <main className="OrderHistoryPage">
    <aside>
      <OrderList 
          orders={orders}
          activeOrder={activeOrder}
          handleDisplayOrder={handleDisplayOrder}
      />
    </aside>
    <OrderDetail 
      order={activeOrder} 
    />
    </main>
    :
    <h3 className='order-msg'>No Orders Yet...</h3>
    }
  </>
  );
}


  
