import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function EmployeeList() {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])
  return (
    <div className="product-list">
        {
            data.map((item,index) => (
                <Card data={item} index={index}></Card>
            ))
        }
    </div>
  )
}
