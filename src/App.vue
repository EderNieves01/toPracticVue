<!-- doble llaves {{variable}} imprime variables dentro de la etiqueta -->
<!-- v-bind:style="namevar" esto agrega una variable como atributo -->
<!-- {{ activo ? "Estoy activo" : "Estoy inactivo" }} condicional if de corta funcion -->
<!-- acepta todo lo que tenga un retorno inmediato -->
<!-- v-if v-else-if v-else dentro de la etiqueta como condicionales -->
<!-- no puede contener interrupcion en su ejecucion por ej: un p o un h 
entre medio pero si dentro de la misma etiqueta -->
<!-- v-show muestra una etiqueta -->
<!-- v-for itera sobre una lista de elementos como un array o un objeto como un bucle
 for normal pasarle la :key con del indice-->
<!-- value en objeto es el contenido y la propiedad es el atributo, tambien recibe el inex -->
<!-- v-for con v-if, el v-if tiene mayor prioridad por eso se coloca antes del v-for,
 tambien podemos poner el v-for first and then v-if incide of a spam-->
<!-- v-on:click o abreviado @click son los eventos al dar click-->
<script setup>

const name = 'Vue dinamico';
// metodos - methods
const handleClick = (message) => {
   console.log(message)
};
</script>

<template>

  <h1>{{name.toUpperCase()}}</h1> 
   
  <!-- podemos utilizar los parentesis en la funcion cuando resiva
     parametros y escuchar eventos con diferentes lados del raton
    prevent en click right para evitar que salga el cuadro de opciones-->
   <!-- activar cuando presione click izquierdo -->
   <button @click.right.prevent="handleClick('texto derecho')">Ativame left</button>
  <!-- activar cuando presione derecho -->
   <button v-on:click.left="handleClick('texto izquierdo')">Ativame right</button>
  <!-- activar cuando presione click en medio -->
   <button v-on:click.middle="handleClick('texto centro')">Ativamemiddle</button>

</template>

<style>
h1 {
  color: white;
}
</style>