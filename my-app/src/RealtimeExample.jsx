import React from 'react'
import axios from 'axios';
import DisplayRealtimeExample from './DisplayRealtimeExample.jsx';

export default function RealtimeExample() {

    const [data ,setData] = React.useState({

    createdAt: "",
    name: "",
    avatar: "",
    address: "",
});

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://6870df9c7ca4d06b34b8714d.mockapi.io/UserInformation', data)
    .then(response => {
        console.log('Data submitted sucessfully:', response.data);
        setData({
            createdAt:"",
            name:"",
            avatar:"",
            address:""
        });
    })
    .catch(error => {
        console.error("Error submitting data:", error);
    });
}

  return (
    <div>
      <form onSubmit= {handleSubmit}>
        <input type='text' placeholder='Name' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        <input type='text' placeholder='Avatar URL' value={data.avatat} onChange={(e) => setData({...data, avatar : e.target.value})} />
        <input type='text' placeholder='Address' value={data.address} onChange={(e) => setData({...data, address: e.target.value})} /> 
        <button type='submit'>Submit</button>  
      </form>
      <DisplayRealtimeExample />
    </div>
  )
}
