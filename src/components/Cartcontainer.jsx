import Cartitem from './Cartitem';
import { useSelector, useDispatch } from 'react-redux';
import { open_modal } from '../features/modal/Modalslice';

function Cartcontainer() {
  const dispatch = useDispatch();

  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h4 className='empty-cart'>Your cart is empty</h4>
        </header>
      </section>
    );
  }

  return (
    <div>
      <section className='cart'>
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {cartItems.map((item) => (
            <Cartitem key={item.id} {...item} />
          ))}
        </div>
        <footer>
          <hr />
          <h4>
            <span>{total.toFixed(2)}</span>
          </h4>
          <button onClick={() => dispatch(open_modal())}>Clear cart</button>
        </footer>
      </section>
    </div>
  );
}

export default Cartcontainer;
