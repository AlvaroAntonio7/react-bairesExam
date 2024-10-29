import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useState } from "react";
//import {setStock, setQuantity} from '../app/counterSlice'



const Form = (props) => {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.counter.value)
    const [input, setInput] = useState(0)
    const handleSell = () =>{
        //implement sell functionality
        //add or substract the value in user funds, add an aler

        props.handleChange();
    }


  return (
    <>
    <h1>Company Name : - {value[props.index].company}</h1>
    <h1>Stocks Owned : - {value[props.index].quantity}</h1>
    <label>
        <h1>Stocks want to sell :- </h1>
    </label>
    <input
    type="number"
    value={input}
    placeholder="0"
    onChange={(e)=>{setInput(e.target.value)}}

    ></input>
<br/>

<button className="btn tn-danger" onClick={handleSell}>Sell</button>
{/* <h1>Company Naame :-{value[props.index].company}*/}
    </>
  )
}

export default Form
