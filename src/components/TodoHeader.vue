<template>
  <header>
    <h1>Header</h1>
    <!-- <h1>{{ this.$store.state.headerText }}</h1> -->
  </header>
</template>

<script>
export default {
  name: 'TodoHeader',
}
</script>

<style lang="scss" scoped>
  header {
    width: 375px;
    background: #232323;
    color: aliceblue;
    & h1 {
      font-weight: 900;
      padding: 2rem;
    }
  }
</style>
