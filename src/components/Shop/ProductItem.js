import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartArrActions } from '../../store/cartArrReducer';

const ProductItem = (props) => {
  const dispatch=useDispatch()
  const itemList=props.itemArr.map((item)=>{
    
    const addToCartHandler=()=>{

      dispatch(cartArrActions.updateCart(item))

    }

    return <li key={item.id} className={classes.item}>
    <Card>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>${item.price.toFixed(2)}</div>
      </header>
      <p>{item.description}</p>
      <div className={classes.actions}>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </Card>
  </li>
  })

  return (
    itemList
  );
};

export default ProductItem;
