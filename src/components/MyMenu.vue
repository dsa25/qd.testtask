<template>
  <nav class="menu">
    <router-link to="/" :class="{ active: $route.path === '/' }">main</router-link>
    <router-link to="/tasks" :class="{ active: $route.path === '/tasks' }">tasks</router-link>
  </nav>
</template>

<script>
export default {
    name: "MyMenu"
}
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.menu a {
    font-size: 18px;
    color: #bbb;
}
.menu a:not(:first-child){
    margin-left: 15px;
}
.menu a.active {
  color: red;
  color: var(--color_red);
}
</style>
