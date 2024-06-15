import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    const itemCount = 5; // Número hardcodeado

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <Badge pill bg="primary" className="ml-2">
        {itemCount}
      </Badge>
    </div>
  );
};

export default CartWidget;
