// @ts-nocheck
import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({bottle, handleAddToCard}) => {
    const {name, img, price} = bottle;
    // console.log(bottle)
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCard(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCard: PropTypes.func.isRequired
}

export default Bottle;