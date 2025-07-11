import React from 'react'
import { useState, useEffect } from 'react';
import DisplayToDo from './DisplayToDo';
import axios from 'axios';

export default function ToDoList() {
const [todos, setTodos] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
// fetch('https://dummyjson.com/todos')
// .then(response => response.json())
// .then(json => { setTodos(json.todos) });
// }, []);

useEffect(() => {
axios.get('https://dummyjson.com/todos')
.then(json => { setTodos(json.data.todos)});
}, []);

const sortedTodos = [...todos].sort((a, b) => {
if (a.completed === b.completed) return 0;
return a.completed ? -1 : 1;
});

const completedCount = todos.filter(todo => todo.completed).length;
const pendingCount = todos.filter(todo => !todo.completed).length;

return (
<div className='card-detail'>
    {
    todos.map((item,index) => (
    <>
        <DisplayToDo key={index.id} data={item} />
    </>
    )

    )
    }
    <div  className='card-detail'>
        <strong>Completed:</strong> {completedCount} &nbsp;|&nbsp;
        <strong>Pending:</strong> {pendingCount}
      </div>
    {
    sortedTodos.map((item,index) => (
    <>
        <DisplayToDo key={index.id} data={item} />
    </>
    )

    )
    }
</div>
);
}