// Add necessary imports
import { setFilters } from "./filters";
import { createTodo } from "./todos";
import { renderTodos } from "./views";

// Render initial todos
renderTodos();

// Set up search text handler
document.querySelector("#filter-input").addEventListener("input", (e) => {
  setFilters({ searchText: e.target.value });
  renderTodos();
});

// Set up checkbox handler
document.querySelector("#hide-completed-cb").addEventListener("change", (e) => {
  setFilters({ hideCompleted: e.target.checked });
  renderTodos();
});

// Set up form submission handler
document.querySelector("#create-task-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = e.target.elements.taskName.value;
  if (!taskName || taskName.trim() === "") return;
  createTodo(taskName);
  renderTodos();
  e.target.elements.taskName.value = "";
});

// Bonus: Add a watcher for local storage
window.addEventListener("storage", (e) => {
  renderTodos();
});

window.dispatchEvent(new Event("storage"));
