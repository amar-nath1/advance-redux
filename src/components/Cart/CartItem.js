import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartArrActions } from '../../store/cartArrReducer';
const CartItem = (props) => {
const dispatch=useDispatch()


  const itemArr=props.items.map((item)=>{

    const increaseHandler=()=>{

      dispatch(cartArrActions.updateCart(item))
    
    }

    const decreaseHandler=()=>{

      dispatch(cartArrActions.reduceCart(item))
    
    }

    let total=item.qty*item.price


    return <li key={item.id} className={classes.item}>
    <header>
      <h3>{item.title}</h3>
      <div className={classes.price}>
        ${total.toFixed(2)}{' '}
        <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
      </div>
    </header>
    <div className={classes.details}>
      <div className={classes.quantity}>
        x <span>{item.qty}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={decreaseHandler}>-</button>
        <button onClick={increaseHandler}>+</button>
      </div>
    </div>
  </li>
  })

  return (
    itemArr
  );
};

export default CartItem;
