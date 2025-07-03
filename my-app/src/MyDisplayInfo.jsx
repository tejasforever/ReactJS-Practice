import React from 'react'

export default function MyDisplayInfo() {
    const [data, setData] = React.useState([]);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}
