<template>
  <div>
    <ul>
      <li v-for="(todoItem, i) in propsdata" :key="i">
        <button class="checkBtn" @click="toggleComplete(todoItem, i)">V</button>
        <h4 v-bind:class="{textCompleted: todoItem.isComplete}">{{todoItem.item}}</h4>
        <button class="removeBtn" @click="removeTodo(todoItem, i)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    propsdata: Array
  },
  methods: {
    removeTodo: function(todoItem, i) {
      this.$emit('removeItem', todoItem, i)
    },
    toggleComplete: function(todoItem) {
      todoItem.isComplete = !todoItem.isComplete;
      localStorage.removeItem(todoItem);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
  },
}
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
    margin: 1rem 0;
    text-align: left;
    background: rgba(220, 220, 220, 0.889);
    height: 50vh;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    & li {
      display: flex;
      width: 80%;
      margin: 1rem auto;
      min-height: 50px;
      height: 50px;
      line-height: 50px;
      padding: 0 0 0.9rem;
      background: white;
      border-radius: 5px;
      box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
      & h4 {
        padding-left: 1rem;
        font-weight: 400;
      }
      .removeBtn {
        margin-left: auto;
        color: #de4343;
        border: none;
        background: transparent;
        padding: 1rem;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 900;
        transition: all 0.3s;
        &:hover {
          transform: translateY(-5%);
        }
      }
      .checkBtn {
        color: #62acbe;
        padding: 1rem;
        cursor: pointer;
        border: none;
        background: transparent;
        transition: all 0.3s;
        font-size: 1rem;
        font-weight: 900;
        &:hover {
          transform: translateY(-5%);
        }
      }
      .checkBtnCompleted {
        color: #b3adad
      }
      .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
      }
    }
  }
</style>