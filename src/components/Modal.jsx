import React from 'react';
import { useDispatch } from 'react-redux';
import { close_modal } from '../features/modal/Modalslice';
import { clear_cart } from '../features/cart/cartslice';

function Modal() {
  const dispatch = useDispatch();
  return (
    <>
      <aside>
        <div className='modal'>
          <h4>Remove all items from cart</h4>
          <div className='btn-container'>
            <button
              className='btn confirm-btn'
              onClick={() => {
                dispatch(clear_cart());
                dispatch(close_modal());
              }}
            >
              Confirm
            </button>

            <button
              className='btn clear-btn'
              onClick={() => dispatch(close_modal())}
            >
              Cancel
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Modal;
