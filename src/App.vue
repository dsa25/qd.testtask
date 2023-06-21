<template>
  
  <header >
    <div class="row">
      <MyLogo></MyLogo>
      <MyMenu></MyMenu>
    </div>
  </header>

  <router-view></router-view>

  <footer>
    <div class="row">
      <div class="copyright"> © Copyright 2023</div>
    </div>
  </footer>

</template>

<script>
  import MyMenu from "@/components/MyMenu.vue"
  import MyLogo from "@/components/MyLogo.vue"

  export default {
    name: "App",
    components: {
      MyMenu,
      MyLogo,
    }
  }
  
</script>