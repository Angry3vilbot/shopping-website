import { v4 as uuidv4 } from 'uuid'
import React, { useEffect } from 'react'

const Cart = (props) =>{
    let takenNamesArray = []
    useEffect(() => {
        document.title = props.title
    })
    function handleChange(event){
        let power = event.target.valueAsNumber
        let item = event.target.parentElement
        let input = item.querySelector('[class="cart-item-price"]')
        let originalPrice = event.target.attributes[1].nodeValue
        input.innerHTML = '$' + (parseFloat(originalPrice.replace('$', ''))*power)
    }
    if(props.itemArray.length === 0){
        return(
            <div>
            <div className="shopping-cart-container">
                <h1>Shopping Cart</h1>
                <h3 className='empty-cart-text'>Your cart is empty! Go add something to it in the <a href="/catalogue">Catalogue</a></h3>
            </div>
        </div>
        )
    }
    else{
        let cartItems = props.itemArray.map((item) => {
            item.name = item.name.replace(`<span class="new-item">NEW </span>`, '')
            if(!takenNamesArray.includes(item.name)){
                takenNamesArray.push(item.name)
                return (<div className="cart-item" key={uuidv4()}>
                <img src={item.image} alt=""></img>
                <p><span className="cart-item-name">{item.name}</span><span className="cart-item-price">{item.price.innerHTML}</span></p>
                <input type="number" defaultValue={1} initialprice={item.price.innerHTML} onChange={handleChange}></input>
                </div>)
            }
        })
        return(
            <div>
                <div className="shopping-cart-container">
                    <h1>Shopping Cart</h1>
                    {cartItems}
                </div>
            </div>
        )
    }
}

export default Cart