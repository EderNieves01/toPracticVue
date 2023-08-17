<!-- doble llaves {{variable}} imprime variables dentro de la etiqueta -->
<!-- v-bind:style="namevar" esto agrega una variable como atributo -->
<!-- {{ activo ? "Estoy activo" : "Estoy inactivo" }} condicional if de corta funcion -->
<!-- acepta todo lo que tenga un retorno inmediato -->

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
  <!-- <h2>
    {{ activo ? "Estoy activo" : "Estoy inactivo" }}
  </h2> -->

  <h2 v-if="activo === true">Estoy activo</h2>
  <!-- <h2 v-if="!activo">Estoy activo</h2> si es diferecte a activo o v-else -->
  <!-- <h2 v-else>Estoy inactivo</h2> tambien tenemos el v-else-if="!activo" -->
  <h2 v-else-if="activo === false">Estoy inactivo</h2>
  <h2 v-else>Estoy indeciso</h2>
</template>

<style>
h1 {
  color: red;
}
</style>