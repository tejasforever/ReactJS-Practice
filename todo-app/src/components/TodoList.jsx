import React from 'react';
import {
  List, ListItem, ListItemText,
  IconButton, Typography, Divider
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos, onEdit, onDelete }) => (
  <List>
    {todos.length === 0 ? (
      <Typography variant="body2" color="text.secondary">
        No tasks yet.
      </Typography>
    ) : (
      todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <ListItem>
            <ListItemText
              primary={todo.title}
              secondary={todo.description}
            />
            <IconButton edge="end" onClick={() => onEdit(todo)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" color="error" onClick={() => onDelete(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))
    )}
  </List>
);

export default TodoList;
