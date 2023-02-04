<template>
  <div id="app">
    <TodoHeader/>
    <TodoFooter/>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"/>
    <TodoInput v-on:addTodoItem="addOneItem"/>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue';
  import TodoFooter from './components/TodoFooter.vue';
  import TodoInput from './components/TodoInput.vue';
  import TodoList from './components/TodoList.vue';

  export default {
    name: 'App',
    data() {
      return {
        todoItems: [],
      }
    },
    methods: {
      addOneItem: function(todoItem) {
        const obj = {isComplete: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj)
      },
      removeOneItem: function(todoItem, i) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(i, 1);
      },
      toggleOneItem: function(todoItem) {
        todoItem.isComplete = !todoItem.isComplete;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      }
    },
    created: function() {
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    },
    components: {
      TodoHeader: TodoHeader,
      TodoFooter: TodoFooter,
      TodoInput: TodoInput,
      TodoList: TodoList
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    font-synthesis: none;
    font-display: swap;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;

    margin: 0;
    padding: 0;


  }
  body {
    display: flex;
    text-align: center;
    height: 100vh;
    justify-content: center;
    width: 100%;
    justify-content: center;
    align-items: start;
    background-color: #F6F6F6;
    overflow: scroll;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
</style>
