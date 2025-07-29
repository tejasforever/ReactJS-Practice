import * as Yup from 'yup';

export const todoSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(2, 'Title must be at least 2 characters'),
  description: Yup.string()
    .required('Description is required')
    .min(2, 'Description must be at least 2 characters'),
});
