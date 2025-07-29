// Mocking local storage for demo purposes
const LOCAL_KEY = "todos";

// Helper to simulate API latency
const wait = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchTodos = async () => {
  await wait(300);
  const saved = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
  return saved;
};

export const addTodo = async (todo) => {
  await wait(300);
  const saved = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
  const newTodo = { ...todo, id: Date.now() };
  localStorage.setItem(LOCAL_KEY, JSON.stringify([newTodo, ...saved]));
  return newTodo;
};

export const updateTodo = async (id, updatedTodo) => {
  await wait(300);
  let saved = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
  saved = saved.map((t) => (t.id === id ? { ...t, ...updatedTodo } : t));
  localStorage.setItem(LOCAL_KEY, JSON.stringify(saved));
  return saved.find((t) => t.id === id);
};

export const deleteTodo = async (id) => {
  await wait(300);
  let saved = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
  saved = saved.filter((t) => t.id !== id);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(saved));
  return id;
};
