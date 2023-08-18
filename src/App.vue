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

//importamos estos para asignarselo a cualquier variable para que sea reactiva
import { ref } from 'vue';

const name = 'Vue dinamico';

//variable o constante reactiva para poder renderizar el valor sin 
//necesidad de volver a cargar la pagina para que sea mas dinamico
//sin esto el valor de counter en el html no cambiara aunque puede mostrarse en consola

const counter = ref(0);

// metodos - methods

const increment = () => {

  //aqui obtenemos el value de esa const
  counter.value ++;
  console.log(counter.value)
}

</script>

<template>

  <h1>{{name.toUpperCase()}}</h1> 

  <!-- renderizar el h2 para que cambie el 0-->
   <h2>{{ counter }}</h2>
  <button @click="increment">increment</button>
</template>

<style>
h1 {
  color: white;
}
</style>