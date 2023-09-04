import { ChevronDown, ChevronUp } from '../icons';
import { remove_item, increase, decrease } from '../features/cart/cartslice';
import { useDispatch } from 'react-redux';

function Cartitem({ id, img, title, price, amount }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Cart Item</h4>
      <article className='cart-item'>
        <img src={img} alt='' />
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>

        <button
          onClick={() => dispatch(remove_item(id))}
          className='remove-btn'
        >
          remove
        </button>

        <div>
          <button
            onClick={() => dispatch(increase({ id }))}
            className='amount-btn'
          >
            <ChevronUp />
          </button>
          <span className='amount'>{amount}</span>

          <button
            onClick={() => {
              amount === 1
                ? dispatch(remove_item(id))
                : dispatch(decrease({ id }));
            }}
            className='amount-btn'
          >
            <ChevronDown />
          </button>
        </div>
      </article>
    </div>
  );
}

export default Cartitem;
