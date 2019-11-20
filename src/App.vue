<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> - 
      <router-link to="/employee-search">Employee Search</router-link> - 
      <router-link to="/blog">Blog</router-link> - 
      <router-link to="/board">Message Board</router-link>
    </div>
    <router-view/>
  </div>
</template>