<script>
import Card from './components/Card.vue'

export default {
  components: { Card }
}
</script>


<template>
  <h1>Components Vue.js</h1>
  <hr>

  <!-- aqui llamamos el componente card da igual si la primera letra es mayuscula o
  minuscula y cerramos la etiqueta-->
  <card />
  <card />
  <card />
</template>

<style>
h1{
  text-align: center;
}
</style>
