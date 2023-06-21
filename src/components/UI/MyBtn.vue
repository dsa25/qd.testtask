<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyBtn",
}
</script>

<style scoped>
.btn {
  display: block;
  padding: 0 8px;
  border-radius: 3px;
  border: 2px solid currentColor;
  background-color: transparent;
  color: gray;
  cursor: pointer;
  height: var(--heightField);
  font-weight: 700;
}
.btn:hover{
  /* opacity: 0.8; */
  color: #fff;

}
.btn__success{
  color: var(--done);
}
.btn__success:hover{
  background-color: var(--done);
  border-color: var(--done);
}
.btn__danger{
  color: var(--color_red);
  font-weight: 900;
}
.btn__danger:hover{
  background-color: var(--color_red);
  border-color: var(--color_red);
}
.btn__info{
  color: #17a2b8;
  color: var(--run);
}
.btn__info:hover{
  background-color: var(--run);
  border-color: var(--run);
}
</style>
