import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Card from './components/UI/Card';
import { useDispatch } from 'react-redux';
import { notifyActions } from './store/uiSlice';
import { cartArrActions } from './store/cartArrReducer';

let isInitial=true

function App() {

  const showCart = useSelector(state => state.cart.showCart)
  const cartArray = useSelector(state => state.cartArr.cartArr)
  const showNotification=useSelector(state=>state.notify.notify)
  const notificationMsg=useSelector(state=>state.notify.notificationMsg)
  const dispatch=useDispatch()

if (showNotification){
  setTimeout(() => {
    dispatch(notifyActions.showNotification(false))
  }, 3000);
}

  useEffect(() => {

    if (isInitial){
      isInitial=false
      fetch('https://advance-redux-amar-default-rtdb.firebaseio.com/cart.json')
      .then((res)=>{
        if(res.ok){
          res.json().then((data)=>{
            
            dispatch(cartArrActions.initCart(data.cartArr))
          })
        }
      })
      return
    }

    dispatch(notifyActions.showNotification(true))
    dispatch(notifyActions.notificationMsg('Sending'))
    fetch('https://advance-redux-amar-default-rtdb.firebaseio.com/cart.json', {

      method: 'PUT',
      body: JSON.stringify({ cartArr: cartArray }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      if (res.ok){
        dispatch(notifyActions.notificationMsg('Success'))
      }
    }).catch(()=>{
      dispatch(notifyActions.notificationMsg('Failed'))
    })


  }, [cartArray])



  return (
    <>
    {showNotification && <div ><p style={{marginLeft:'200px',color:'white'}}>{notificationMsg}</p></div>}

    <Layout>
      
      {showCart && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
