import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import {setStock} from "../app/counterSlice"
import Table from "../components/Table"
import form from "../components/Form"
import Form from '../components/Form'

const MyStocks = () => {

    const [form, setForm] = useState(0)
    const [index, setIndex] = useState(0)
    var sum = 0

    const value = useSelector((state)=>state.couter.value)

    const handleRemove= (i) =>{
        setIndex(i)
        setForm(i)
    }

    const handleChange = () =>{
        setForm(0)
    }

    if(form == 1){
        return <Form index={index} handleChange={handleChange}></Form>
    }

    if(form == 0){
        return(<div>
            <h1>Your Portafolio</h1>
            <div className='container-fluid my-5'>
                <table className='table table-striped table-dark'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Bought</th>
                            <th scope='col'>Current Value</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.map((stock, index)=>{
                            sum += (stock.quantity * stock.price)
                            return(
                                <table stock={stock} index={index} handleRemove={handleRemove} data-testid={stock.company} key={index}></table>
                            )
                        })}
                        <tr>
                            <th scope='row'>Networth</th>
                            <td></td>
                            <td></td>
                            <td>Rs <span data-testid="totalPrice-MyStocks">{sum}</span></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        )
    }

    return (
    <div>
      
    </div>
  )
}


export default MyStocks

