<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  methods: {
    clearTodo() {
      this.$emit('removeAll')
    }
  }
}
</script>

<style lang="scss" scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background: white;
    border-radius: 5px;
    margin: 1rem auto;
    & .clearAllBtn {
      color: #e20303;
      display: block;
      cursor: pointer;
      margin: 1rem;
    }
  }
</style>
