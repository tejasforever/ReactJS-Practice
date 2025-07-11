import React from 'react'

export default function DisplayToDo(props) {
const { data } = props;
return (

    <div className="card">
        <h4>User Id : {data.userId}</h4>
        <h3 className="card-title">{data.todo}</h3>
        <div className="card-category">Status: {data.completed ? "Completed" : "Pending"}</div>
    </div>

);
}     