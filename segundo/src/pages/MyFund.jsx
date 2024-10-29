import React from 'react'
import {useSelector} from 'react-redux'

const MyFund = () => {
    const value = useSelector((state)=> state.counter.value)
    var sum = 0
    value.map((val) => {sum += val.quantity*val.price})
  return (
    <>
    <h1>Total Fund : -Rs{10000}</h1>
    <br/>
    <h1>Total value of stock bought :-Rs <span data-testid='stock-fund'>{sum}</span></h1>
    <br/>
    <h1>emaining fund :- Rs<span data-testIdid="fund">{10000 - sum }</span></h1>
    </>
  )
}

export default MyFund
