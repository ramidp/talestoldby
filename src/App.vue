<script setup>
import { RouterView, useRouter } from 'vue-router'
import Header from './components/Header.vue'


const theme = {
  color1: '#424874',
  color2: '#DCD6F7',
  color3: '#A6B1E1',
  color4: '#CACFD6'
}

</script>

<template>

  <nav>
    <Header :theme="theme" />
  </nav>

  <main>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :theme='theme' :is="Component" />
      </transition>
    </router-view>
  </main>


</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Instrument+Serif:ital@0;1&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  font-family: "Barlow";

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Instrument Serif"
  }


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
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 150px 0 50px 0;

  h1 {
    color: v-bind('theme.color1');
    font-size: calc(70px + 1vw);
    width: 100%;
    left: 0;
    font-weight: bold;
    text-transform: uppercase;
    background-color: v-bind('theme.color2');
    padding: 25px 0;
    padding-left: 50px;

    @media (max-width: 768px) {
      padding-left: 25px;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: black;
    letter-spacing: -0.5px;
    line-height: 120%;
    margin: 0;
  }
}

main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
