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
  <!-- aqui no es necesario usar directiva, vas con ponerle el nombre de la propiedad -->
  
  <card url="https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg"
  nombre="Vue.js"/>
 
  <card url="https://cdn.svgporn.com/logos/vuetifyjs.svg?response-content-disposition=attachment%3Bfilename%3Dvuetifyjs.svg"
  nombre="Vuetify.js"/>
  <card url="https://cdn.svgporn.com/logos/angular-icon.svg?response-content-disposition=attachment%3Bfilename%3Dangular-icon.svg"
  nombre="Angular.js"/>

  <card url="https://cdn.svgporn.com/logos/react-query-icon.svg?response-content-disposition=attachment%3Bfilename%3Dreact-query-icon.svg"
  nombre="React.js"/>

</template>

<style>
h1{
  text-align: center;
}
</style>
