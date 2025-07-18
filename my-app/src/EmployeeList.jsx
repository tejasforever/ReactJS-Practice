import React, { useEffect, useState } from 'react'
import Card from './Card';
import CardDestructrProps from './CardDestructrProps';
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function EmployeeList() {
    const [data,setData] = useState([]);
    
       
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //     .then(response => response.json())
    //     .then(json => setData(json))
    // }, [])

    // using axios method 

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((json) => {
            setData(json.data);
            console.log(json.data);
            console.log(json.status);
            console.log(json.statusText);
        });
    }, [])

  return (
    <div className="product-list">
        {
            data.map((item,index) => (
                <>  
                <Card key={index} data={item} />
                {/*<CardDestructrProps key={index} data={item} index={index} /> */}
                 <Button variant="outlined" startIcon={<DeleteIcon />}>Delete Information </Button>
                <HomeIcon />
                </>
            ))
        }
    </div>
  )
}

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}