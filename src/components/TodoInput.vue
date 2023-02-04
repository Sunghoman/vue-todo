<template>
  <div class="inputBox shadow">
    <input type="text" placeholder="할 일을 적어보쎄요~" v-model="newTodoItem" @keyup.enter="addTodo"/>
    <span class="addContainer" @click="addTodo">
      <button class="addBtn">+</button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      newTodoItem: "",
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== '') {
        const obj = {isComplete: false, item: this.newTodoItem};
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      } else {
        alert('할 일을 입력해주세요~')
      }
    },
    clearInput: function() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style lang="scss" scoped>
  .inputBox {
    width: 375px;
    position: fixed;
    bottom: 0;
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    & input {
      border-style: none;
      height: 50px;
      font-size: 0.9rem;
      width: 60%;
      &:focus {
        outline: none;
      }
    }
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    & .addBtn {
      color: white;
      vertical-align: middle;
      cursor: pointer;
      border: none;
      background: none;
      font-size: 2rem;
    }
  }
</style>