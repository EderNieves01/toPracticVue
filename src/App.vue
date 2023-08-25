
<script>

// exportamos la data para guardar un objeto que tendra la informacion para nuestras variables
export default{
  data: () => ({
    counter: 10,
    name: 'Vue dinamico',
    colorP: 'negative',
  }),
  methods: {
   increment(){
    this.counter++;
   },
   decrement(){
    this.counter--;
   },
   reset(){
    this.counter = 0;
   }
  }
}
</script>

<template>
<div class="container">


  <h1 v-bind:style="colorP">{{name.toUpperCase()}}</h1> 

  <!-- renderizar el h2 para que cambie el 0-->

   <h2 >{{ counter }}</h2>

  <button class="btn btn-success" @click="increment">increment</button>
  <button class="btn btn-danger" @click="decrement">decrement</button>
  <button class="btn btn-warning" @click="reset">reset</button>
   <br>

</div>
</template>

<!-- restringe los estilos css a solo esta parte del codigo
si queremos hacer otro html no aplicaria estos estilos -->
<style scoped>
/* tambien puedo importar la carpeta css aqui adentro */
.container{
  text-align: center;
}
h1 {
  color: red;
}

/* propiedades para ser computadas */
.positive{
  color: green;
}
.negative{
  color: red;
}
.zero{
  color: peru;
}
</style>