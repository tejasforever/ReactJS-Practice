import React from 'react';
import { useFormik } from 'formik';
import { todoSchema } from '../utils/validationSchema';
import { TextField, Button, Box } from '@mui/material';

const TodoForm = ({ initialValues, onSubmit, onCancel }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: todoSchema,
    onSubmit,
    enableReinitialize: true
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mb={2}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          multiline
          minRows={2}
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          label="Created By"
          name="createdBy"
          value={formik.values.createdBy}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.createdBy && Boolean(formik.errors.createdBy)}
          helperText={formik.touched.createdBy && formik.errors.createdBy}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">
        {initialValues.id ? 'Update' : 'Add'}
      </Button>
      {onCancel && (
        <Button onClick={onCancel} color="secondary" sx={{ ml: 2 }}>
          Cancel
        </Button>
      )}
    </form>
  );
};

export default TodoForm;
