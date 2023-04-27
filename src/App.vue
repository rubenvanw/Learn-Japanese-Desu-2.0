<script setup>
</script>

<template>
  <div class="container">
    <header>
    <div class="title">Learn Japanese Desu</div>
  </header>
  <nav>
    <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/hiragana">Hiragana</router-link>
      <router-link to="/katakana">Katakana</router-link>
      <router-link to="/kanji">Kanji</router-link>
      <router-link to="/keyboard">Keyboard</router-link>
    </ul>
  </nav>
  <div class="content">
    <router-view></router-view>
  </div>
  </div>
</template>

<style scoped>
.container{
    width: 880px;
    height: 100vh;
}

.title{
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}

nav{
  display: flex;
  justify-content: center;
}

nav ul{
  display: flex;
  justify-content: center;
  grid-gap: 1%;
  gap: 1%;
}

.content{
  width: 100%;
  height: 500px;
  margin-top: 2.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
}
</style>
