<!-- doble llaves {{variable}} imprime variables dentro de la etiqueta -->
<!-- v-bind:style="namevar" esto agrega una variable como atributo -->
<!-- {{ activo ? "Estoy activo" : "Estoy inactivo" }} condicional if de corta funcion -->
<!-- acepta todo lo que tenga un retorno inmediato -->
<!-- v-if v-else-if v-else dentro de la etiqueta como condicionales -->
<!-- no puede contener interrupcion en su ejecucion por ej: un p o un h 
entre medio pero si dentro de la misma etiqueta -->
<!-- v-show muestra una etiqueta -->
<!-- v-for itera sobre una lista de elementos como un bucle for normal pasarle la :key con del indice-->

<script setup>

const name = 'Vue dinamico';
const arrayFrutas = ["pera", "banana", "tomates"];

</script>

<template>

  <h1>{{name.toUpperCase()}}</h1> 
  <ul>
    <li v-for="(frutas, index) in arrayFrutas" :key="index">

      {{ index }} - {{ frutas }}

    </li>
  </ul>

</template>

<style>
h1 {
  color: red;
}
</style>