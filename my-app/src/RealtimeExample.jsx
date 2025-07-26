
// RealtimeExample: Form to submit user data to a mock API and display results
// Demonstrates use of React state, axios for API calls, and child component for display
// Includes inline comments for clarity and maintainability
import React from 'react';
import axios from 'axios';
import DisplayRealtimeExample from './DisplayRealtimeExample.jsx';

export default function RealtimeExample() {
    // State to hold form data
    const [data, setData] = React.useState({
        createdAt: "",
        name: "",
        avatar: "",
        address: "",
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://6870df9c7ca4d06b34b8714d.mockapi.io/UserInformation', data)
            .then(response => {
                console.log('Data submitted sucessfully:', response.data);
                // Reset form after successful submit
                setData({
                    createdAt: "",
                    name: "",
                    avatar: "",
                    address: ""
                });
            })
            .catch(error => {
                console.error("Error submitting data:", error);
            });
    };

    return (
        <div>
            {/* Form for user input */}
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                {/*
                  Typo fix: value={data.avatat} should be value={data.avatar}
                  This input is for the avatar URL
                */}
                <input type='text' placeholder='Avatar URL' value={data.avatar} onChange={(e) => setData({ ...data, avatar: e.target.value })} />
                <input type='text' placeholder='Address' value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} />
                <button type='submit'>Submit</button>
            </form>
            {/* DisplayRealtimeExample will show the submitted data list */}
            <DisplayRealtimeExample />
        </div>
    );
}
