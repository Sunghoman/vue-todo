export const mutations = {
  addOneItem(state, todoItem) {
    const obj = {isComplete: false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.i, 1);
  },
  toggleOneItem(state, payload) {
    state.todoItems[payload.i].isComplete = !state.todoItems[payload.i].isComplete;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  },
  removeAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  }
}