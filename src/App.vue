<!-- doble llaves {{variable}} imprime variables dentro de la etiqueta -->
<!-- v-bind:style="namevar" esto agrega una variable como atributo -->
<!-- {{ activo ? "Estoy activo" : "Estoy inactivo" }} condicional if de corta funcion -->
<!-- acepta todo lo que tenga un retorno inmediato -->
<!-- v-if v-else-if v-else dentro de la etiqueta como condicionales -->
<!-- no puede contener interrupcion en su ejecucion por ej: un p o un h 
entre medio pero si dentro de la misma etiqueta -->
<!-- v-show muestra una etiqueta -->
<!-- v-for itera sobre una lista de elementos -->

<script setup>

const name = 'Vue dinamico';
const styleColor = "color: blue";
const arrayColores = ["blue", "red", "peru"];
const activo = activo;

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
  <h2 v-else-if="activo === false">
    <span>Icono</span> <!--dentro de la etiqueta h2 sin interrumir-->
    Estoy inactivo
  </h2>
  <h2 v-else>Estoy indeciso</h2>

  <h2 v-show="activo">activo v-show</h2>

</template>

<style>
h1 {
  color: red;
}
</style>