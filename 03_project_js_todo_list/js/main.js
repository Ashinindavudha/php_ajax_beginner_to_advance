//select elements in DOM
const form = document.querySelector("#itemForm");
const itemInput = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemList");
const messageDiv = document.querySelector("#message");
const clearButton = document.querySelector("#clearBtn");
const filters = document.querySelectorAll(".nav-item");
//create empty item list
let todoItems = [];

const showAlert = function (message, msgClass) {
  console.log("msg");
  messageDiv.innerHTML = message;
  messageDiv.classList.add(msgClass, "show");
  messageDiv.classList.remove("hide");
  setTimeout(() => {
    messageDiv.classList.remove("show", msgClass);
    messageDiv.classList.add("hide");
  }, 3000);
  return;
};
//filter tab items
const getItemsFilter = function (type) {
  let filterItems = [];
  console.log(type);
  switch (type) {
    case "todo":
      filterItems = todoItems.filter((item) => !item.isDone);
      break;
    case "done":
      filterItems = todoItems.filter((item) => !item.isDone);
      break;
    default:
      filterItems = todoItems;
  }
  getList(filterItems);
};
//update item
const updateItem = function (itemIndex, newValue) {
  console.log(itemIndex);
  const newItem = todoItems[itemIndex];
  newItem.name = newValue;
  todoItems.splice(itemIndex, 1, newItem);
  setLocalStorage(todoItems);
};
//remove/delete item
const removeItem = function (item) {
  const removeIndex = todoItems.indexOf(item);
  todoItems.splice(removeIndex, 1);
};
