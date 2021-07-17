<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

export default {
};
</script>

<style>
@import './assets/variables.css';
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@100;400&family=Playfair+Display&display=swap');
body {
  background-color: #e3e2df;
font-family: 'Playfair Display', serif;}
</style>
