import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = () => {
const cartArray=useSelector(state=>state.cartArr.cartArr)
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          items={cartArray}
        />
      </ul>
    </Card>
  );
};

export default Cart;
