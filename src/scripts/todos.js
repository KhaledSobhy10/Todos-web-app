import { v4 as uuidv4 } from "uuid"; //generate unique id to todo
const TODOS_KEY = "todos";

let todos = [];

//load todos from local storage
const loadTodos = () => {
  try {
    todos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
  } catch {
    return [];
  }
};

//save todos to local storage
const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

//get todos object
const getTodos = () => todos;

// create todo and add it to local storage
const createTodo = (todoTitle) => {
  todos.push({ id: uuidv4(), title: todoTitle, completed: false });
  saveTodos();
};

// remove todo from local storage
const removeTodo = (id) => {
  const todoIndexToBeDeleted = todos.findIndex((todo) => todo.id == id);
  if (todoIndexToBeDeleted > -1) {
    todos.splice(todoIndexToBeDeleted, 1);
    saveTodos();
  }
};

//change status of todo
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  saveTodos();
};


loadTodos();

export { getTodos, createTodo, removeTodo, toggleTodo };
