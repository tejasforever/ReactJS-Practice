
// EmployeeList: Fetches and displays a list of products using the Card component.
// Uses axios to fetch product data from an API and maps over the data array to render a Card for each product.
import React, { useEffect, useState } from 'react';
import Card from './card';
import CardDestructrProps from './CardDestructrProps';
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EmployeeList() {
  // State to hold product data
  const [data, setData] = useState([]);

  // Fetch product data from API on component mount
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((json) => {
        setData(json.data);
        // Log data and status for debugging
        console.log(json.data);
        console.log(json.status);
        console.log(json.statusText);
      });
  }, []);

  // Render product list using Card component
  return (
    <div className="product-list">
      {
        data.map((item, index) => (
          // Render each product as a Card
          <Card key={index} data={item} />
          // Optionally use CardDestructrProps for destructured props example
          // <CardDestructrProps key={index} data={item} index={index} />
        ))
      }
    </div>
  );
}