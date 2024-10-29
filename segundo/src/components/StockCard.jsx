

import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addStock} from '../app/counterSlice'


const StockCard = () => {
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()

    function disabled(){

    }

    //Increment button should increment the quantity while
    //buy button should only be enabled if quantity is greate
    //onClick buy butto should add quantiy using addstock

  return (
    <div className='col-sm-4 mx-auto my-5'>
        <div className='card width bg-dark'>
            <div className='card-body text-light'>
                <h5 className='card-title' data-testid={`${props.value.product}`}>
                    {props.value.company}
                </h5>
                <p className='card-text'>Price :-{props.value.product}</p>
                <p className='card-text'>
                    Quantity :- <span data-testid="quantity">{quantity}</span>
                </p>
                <p className='card-text'>
                    Total value = {' '} 
                    <span data-testid="totalPrice">{quantiy * prop}</span>
                    </p>
                    <button
                    className='btn btn-primary text-light mx-1'
                    data-testid="increment"
                    >Increment</button>
                    
                    <button
                    className='btn btn-primary text-light mx-1'
                    disabled={disabled()}
                    data-testid="decrement"
                    >Decrement</button>

                    <button
                    className='btn btn-danger mx-auto my-3 buy'
                    disabled={disabled()}
                    data-testid ="buy"
                    >Buy</button>
                </div>
        </div>
  
    </div>
  )
 

}

export default StockCard
