import React, { useEffect, useState } from 'react'
import StockCard from '../components/StockCard'
import {useDispatch} from 'react-redux'
import {changeData} from '../app/stockSlice'

const Home = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }

    async function getdata(){
        //fetch stocks
    }

    useEffect(()=>{
        //use setInterval to fetch data and setData for every
    },[])
    
  return (
    <div>
      <h1>DashBoard</h1>
      <nav className='navbar navbar-expad-lg'>
        <div className='collapse navbar-collapse' id='navbarSearch'>
        <form className='form-inline my-2 my-lg-0'>
    <input className='form-control mr-sm-3' type='search' placeholder='Search' value={search} onChange={(e)=>{handleSearch(e)}}/>
        </form>
        </div>
       
      </nav>

      <div className='container'>
        <div className='row'>
            {data.map((value)=>{
                if(search == ""){
                    return <StockCard  value={value} data-testid ={value.company}/>
                }else{
                    if(value.name.toLowerCase().includes(search)){
                        return <StockCard  value={value} data-testid ={value.company}/>
                    }
                }
            })

            }
        </div>
      </div>

    </div>
  )
}

export default Home
