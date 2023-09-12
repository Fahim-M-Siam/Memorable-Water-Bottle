// @ts-nocheck
import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart, handleRemoveCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
                {cart.map(bottle => <div key={bottle.id}>
                    <img  src={bottle.img}></img>
                    <button onClick={() => handleRemoveCart(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};


Cart.propTypes ={
    cart: PropTypes.array.isRequired,
    handleRemoveCart: PropTypes.func.isRequired
}

export default Cart;