import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IProducts } from './IProducts'
import { Product } from './Product'
import './GetDataFromAPI.scss';
export default function GetDataFromAPI() {

    const [products,SetProducts] = useState<IProducts[]>([])

        const getData = ()=>{
        axios.get<Product[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
        .then((response)=>{
           let productsFromAPI = response.data.map((product:Product)=>{
               return new Product(product.id,product.name,product.price,product.imageUrl,product.year);
            });
            SetProducts(productsFromAPI)
            console.log(response.data)})
            }
            console.log(products)

     useEffect(() => {
        getData();
    },[]);
    let list = products.map((product,i)=>{
        return (<div className='prodContainer'><ul> <li key={i}><img src={product.imageUrl} className="imgContainer" alt={product.name} /> <br /> ID:{product.id} <br /> Namn: {product.name} <br /> Pris:{product.price} <br /> År: {product.year} <br /><br /> </li></ul></div>)
    })
    
  return (<>
  <main className='main'>
  
  <div>
      {list}
  </div>
  </main>
  </>
  )
}
