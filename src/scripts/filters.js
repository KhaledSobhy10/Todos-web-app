// Set up filters default object
const filters = {
  searchText: "",
  hideCompleted: false,
};

const getFilters = () => filters;

// updates object with optional searchText or hideCompleted
const setFilters = ({ searchText, hideCompleted }) => {
  // const { searchText, hideCompleted } = updates; //destructuring object
  if (typeof searchText === "string") {
    filters.searchText = searchText;
  }
  if (typeof hideCompleted === "boolean") {
    filters.hideCompleted = hideCompleted;
  }
};

//exports
export { getFilters, setFilters };
