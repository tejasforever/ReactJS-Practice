import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import * as api from './api/todoApi';

const defaultForm = { title: '', description: '', id: null };

function App() {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadTodos = async () => {
    const data = await api.fetchTodos();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAddOrUpdate = async (values, { resetForm }) => {
    if (editing) {
      await api.updateTodo(editing.id, values);
    } else {
      await api.addTodo(values);
    }
    resetForm();
    setEditing(null);
    loadTodos();
  };

  const handleEdit = (todo) => setEditing(todo);

  const handleDelete = async (id) => {
    await api.deleteTodo(id);
    loadTodos();
  };

  const handleCancel = () => {
    setEditing(null);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Todo List
        </Typography>
        <Box mb={3}>
          <TodoForm
            initialValues={editing || defaultForm}
            onSubmit={handleAddOrUpdate}
            onCancel={editing ? handleCancel : null}
          />
        </Box>
        <TodoList
          todos={todos}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Paper>
    </Container>
  );
}

export default App;
