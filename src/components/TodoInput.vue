<template>
  <div class="inputBox">
    <input type="text" placeholder="할 일을 적어보쎄요~" v-model="newTodoItem" @keyup.enter="addTodo"/>
    <span class="addContainer" @click="addTodo">
      <button class="addBtn">+</button>
    </span>

    <AlertModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">안 내</h3>
      <h3 slot="body">값을 입력 해주세요</h3>
    </AlertModal>

  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue';

export default {
  name: 'TodoInput',
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = true
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    AlertModal: AlertModal
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