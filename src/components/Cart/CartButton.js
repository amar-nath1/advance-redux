import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { showCartActions } from '../../store/cartReducer';
import { useSelector } from 'react-redux';


const CartButton = (props) => {

  const cartArr=useSelector(state=>state.cartArr.cartArr)

  let totalQty=0
  cartArr.forEach(item => {
    return totalQty+=item.qty
  });
const dispatch=useDispatch()
const showCartHandler=()=>{

  dispatch(showCartActions.showCart())

}

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
