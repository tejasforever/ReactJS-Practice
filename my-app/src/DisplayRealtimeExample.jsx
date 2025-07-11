import React, {  useEffect, useState } from 'react';
import axios from 'axios';

export default function DisplayRealtimeExample() {
const [data, setData] = useState([]);

useEffect(() => {
axios.get('https://6870df9c7ca4d06b34b8714d.mockapi.io/UserInformation')
.then(data => {
setData(data.data);
})
.catch(error => {
console.error('Error fetching data:', error);
});
}, []);

 const deleteInfo = (id) => {
    axios.delete(`https://6870df9c7ca4d06b34b8714d.mockapi.io/UserInformation/${id}`)
      .then(() => {
        setData(prevData => prevData.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

return (
<div>{
    data.map((item,index) => (
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
            <button onClick={()=>{
                deleteInfo(item.id);
            }}>Delete Information</button>
            </div>
    </div>
    ))
    }</div>
)
}