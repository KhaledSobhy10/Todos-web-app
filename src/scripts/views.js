import { getFilters } from "./filters";
import { getTodos, removeTodo, toggleTodo } from "./todos";

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
  document.querySelector("#todos").innerHTML = "";
  const filteredTods = filterTodos(getTodos(), getFilters());
  if (filteredTods && filteredTods.length > 0) {
    appendElement(generateSummaryDOM(getLeftTodosNum(filteredTods)), "#todos");
    filteredTods.forEach((element) => {
      appendElement(generateTodoDOM(element), "#todos");
    });
  } else appendElement(generateEmptyMessageDOM(), "#todos");
};

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) => {
  const todoContanier = document.createElement("div");
  const todoEl = document.createElement("label");
  const checkbox = document.createElement("input");
  const titleEl = document.createElement("span");

  const removeButton = document.createElement("button");

  // Setup styles to elements
  todoEl.className = "list-item";
  titleEl.className = "list-item__title";
  removeButton.className = "button button--text";
  todoContanier.className = "list-item__container";

  //Setup title
  titleEl.textContent = todo.title;

  //Setup checkbox
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", (e) => {
    toggleTodo(todo.id);
    renderTodos();
  });

  //Setup remove task button
  removeButton.textContent = "remove";
  removeButton.addEventListener("click", () => {
    removeTodo(todo.id);
    renderTodos();
  });

  //append all element
  todoContanier.appendChild(checkbox);
  todoContanier.appendChild(titleEl);
  todoEl.appendChild(todoContanier);
  todoEl.appendChild(removeButton);

  return todoEl;
};

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (incompletedTodos) => {
  const summeryElement = document.createElement("p");
  summeryElement.className = "list-title";
  const x = incompletedTodos === 1 ? "" : "s";
  summeryElement.textContent = `You have ${incompletedTodos} todo${x} left`;
  return summeryElement;
};

//helper functions

const generateEmptyMessageDOM = () => {
  const emptyEl = document.createElement("p");
  emptyEl.className = "empty-message";
  emptyEl.textContent = "No todos to show !!";
  return emptyEl;
};

// to create element
const appendElement = (element, whereToAppendStr) => {
  document.querySelector(whereToAppendStr).appendChild(element);
};

/** filter todos by given filters
 * @returns filterd todos
 * */
const filterTodos = (todos, filters) => {
  return todos.filter((todo) => {
    const shouldHide = filters.hideCompleted && todo.completed;
    const haveFilterKeyWord = todo.title
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    return shouldHide ? false : haveFilterKeyWord;
  });
};

//Get left todos
const getLeftTodosNum = (todos) => {
  return todos.filter((task) => !task.completed).length;
};

//exports
export { renderTodos };
