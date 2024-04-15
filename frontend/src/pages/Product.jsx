import React, { useEffect } from 'react'
import all_product from '../Components/Assets/all_product'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'

function Product() {

  const Product_id = useParams();
  const product = all_product.find((p)=>p.id===Number(Product_id))
  

  

  return (
    <div>
     <Breadcrums product={product} />

    </div>
  )
}

export default Product