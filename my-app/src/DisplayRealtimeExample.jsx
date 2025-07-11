import React, { useEffect } from 'react'

export default function DisplayRealtimeExample() {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        fetch('https://6870df9c7ca4d06b34b8714d.mockapi.io/UserInformation')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

  return (
    <div>{}
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
        </div>
      ))
    </div>
  )
}
