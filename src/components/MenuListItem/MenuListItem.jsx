/* eslint-disable jsx-a11y/alt-text */
import './MenuListItem.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <img className="productImg flex-ctr-ctr" src={menuItem.productImg}></img>
      <div className="name">{menuItem.name}</div>
      <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}