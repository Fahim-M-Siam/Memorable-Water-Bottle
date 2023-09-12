/* eslint-disable no-unused-vars */
// @ts-nocheck
import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";

// @ts-nocheck
const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('Bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])


    // load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length)
        if(bottles.length){
            const storedCart = getStoredCart();
            console.log(storedCart);
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            console.log('Saved Cart: ', savedCart);
            setCart(savedCart);

        }
    },[bottles]);


    const handleAddToCard = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from store LS
        removeFromLS(id)
    }


    return (
        <>
            <h2>Bottles available: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} 
                    bottle={bottle}
                    handleAddToCard={handleAddToCard}></Bottle>)
            }
            </div>
        </>
    );
};

export default Bottles;