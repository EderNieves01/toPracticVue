<!-- doble llaves {{variable}} imprime variables dentro de la etiqueta -->
<!-- v-bind:style="namevar" esto agrega una variable como atributo -->
<script setup>
const name = 'Vue dinamico';
const styleColor = "color: blue"
</script>

<template>

  <h1>{{name}}</h1>  
  <h2 v-bind:style="styleColor">Soy azul</h2>
  
</template>

<style>
h1 {
  color: red;
}
</style>