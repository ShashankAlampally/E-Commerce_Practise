import React from 'react'
import './CSS/ShopCategory.css'

import dropdownIcon from '../Components/Assets/dropdown_icon.png'
import '../Components/Item/Item.js'
import Item from '../Components/Item/Item'
import all_product from '../Components/Assets/all_product.js'

function ShopCategory(props) {

  
  console.log(all_product)
  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner} alt=''/>
      <div className='shopCategory-indexSort'>
      <p>
      <span>Showing 1-12</span> out of 36 Products
      </p>
      <div className='shopCategory-Sort'>
          Sort by <img src={dropdownIcon} alt=''/>

      </div></div>
      <div className='shopCategory-products'>
      {all_product.map((item,i)=>{
              if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }
              else{
                return null
              }
      })}
      
      </div>
      <div className='shopCategory-loadmore'>
        Explore More
      
      </div>
      </div>
    
  )
}


export default ShopCategory