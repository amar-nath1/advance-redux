import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { showCartActions } from '../../store/cartReducer';

const CartButton = (props) => {
const dispatch=useDispatch()
const showCartHandler=()=>{

  dispatch(showCartActions.showCart())

}

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
