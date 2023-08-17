<!-- doble llaves {{variable}} imprime variables dentro de la etiqueta -->
<!-- v-bind:style="namevar" esto agrega una variable como atributo -->
<!-- {{ activo ? "Estoy activo" : "Estoy inactivo" }} condicional if de corta funcion -->
<script setup>
const name = 'Vue dinamico';
const styleColor = "color: blue";
const arrayColores = ["blue", "red", "peru"];
const activo = true;
</script>

<template>

  <h1>{{name.toUpperCase()}}</h1>  
  <h2>{{ arrayColores }}</h2>
  <h2 :style="`color: ${arrayColores[2]}`">Soy peru</h2>
  <h2>
    {{ activo ? "Estoy activo" : "Estoy inactivo" }}
  </h2>
  
</template>

<style>
h1 {
  color: red;
}
</style>