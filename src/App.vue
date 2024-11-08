<template>
  <div class="container">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>


<script setup>

import { useRouter } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const router = useRouter();
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  list-style: none;
  color: #111111;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

main {
  width: 100%;
  padding: 0 20px;
}
</style>
