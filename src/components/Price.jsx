"use client"
import React, { useEffect, useState } from 'react'

const Price = ({price,options,id}) => {
// -------States------ 
const[totalPrice,setTotalPrice] = useState(price)
const[selectSize,setSelectedSize]= useState(0)
const[quantity,setQuantity]=useState(1);
console.log(selectSize)




// functionalities over here 
const handleQuantity=(opr)=>{
    opr=='i'?
    setQuantity(prevState=>prevState<9?prevState+1:9)
    :
    setQuantity(prevState=>prevState>1?prevState-1:1)
}

useEffect(()=>{
  setTotalPrice(
    quantity*(options? price + options[selectSize].additionalPrice :price)
  )
},[price,quantity,selectSize,options])

  return (
    <>
       <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${totalPrice}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
      
          {
            options?.map((btn,idx)=>(
            <button key={idx}
         className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
         style={{
            background:selectSize==idx? "rgb(248 113 113)" : "white",
            color: selectSize === idx ? "white" : "red",
         }}
         onClick={() => setSelectedSize(idx)}
            >{btn.title}</button> 
            ))
          }
 
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
             onClick={()=>handleQuantity('d')}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={()=>handleQuantity('i')}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        
        <button  className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
        

      </div>
    </div>
    </>
  )
}

export default Price
