// Component to fetch and display a list of users from a mock API, with delete functionality.
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DisplayRealtimeExample() {
  // State to hold user data from API
  const [data, setData] = useState([]);

  // Fetch user data on component mount
  useEffect(() => {
    axios.get('https://6870df9c7ca4d06b34b8714d.mockapi.io/UserInformation')
      .then(data => {
        setData(data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Delete a user by id and update local state
  const deleteInfo = (id) => {
    axios.delete(`https://6870df9c7ca4d06b34b8714d.mockapi.io/UserInformation/${id}`)
      .then(() => {
        setData(prevData => prevData.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  // Render user list with delete button
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div>
            Name: {item.name}
          </div>
          <div>
            Avatar: {item.avatar}
          </div>
          <div>
            Address: {item.address}
          </div>
          <div>
            Id: {item.id}
        </div>
        <div>
           
            <Button variant="outlined" startIcon={<DeleteIcon />}  onClick={()=>{
                deleteInfo(item.id);
            }}>Delete Information </Button>

            
           
            </div>
    </div>
    ))
    }</div>
)
}