import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Cartcontainer from './components/Cartcontainer';
import Modal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, get_cart_items } from './features/cart/cartslice';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(get_cart_items());
  }, []);


  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }



  return (
    <div className='App'>
      {isOpen && <Modal />}
      <Navbar />
      <Cartcontainer />
    </div>
  );
}
export default App;
