<script setup>
import { RouterView, useRouter } from 'vue-router'
import Header from './components/Header.vue'


</script>

<template>

  <nav>
    <Header />

  </nav>

  <main>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>


</template>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Tahoma";
  user-select: none;

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    /* También oculta la barra horizontal si es necesario */
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body {
  margin: 0;
}

section {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 150px 0 50px 0;
}

main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
