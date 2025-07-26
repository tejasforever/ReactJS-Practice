
// MyDisplayInfo: Fetches and displays API data (example component)
// Uses useEffect to fetch posts from a public API and displays them in a list.
// You can add alternative methods or reference code below, with comments explaining their purpose.
import React from 'react';

export default function MyDisplayInfo() {
    // State to hold fetched data
    const [data, setData] = React.useState([]);
    // Example counter state (not used in this code, but can be used for demo purposes)
    const [count, setCount] = React.useState(0);

    // Fetch data from API on component mount
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    // Render the fetched data
    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
}
