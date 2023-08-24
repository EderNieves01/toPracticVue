
<script setup>

//importamos estos para asignarselo a cualquier variable para que sea reactiva
//computed realizar un computo, propiedades computadas
import { ref, computed } from 'vue';

const name = 'Vue dinamico';
const colorP = 'negative';
//variable o constante reactiva para poder renderizar el valor sin 
//necesidad de volver a cargar la pagina para que sea mas dinamico
//sin esto el valor de counter en el html no cambiara aunque puede mostrarse en consola

const counter = ref(0);
const arrayFavoritos = ref([]);
// metodos - methods

const increment = () => {
  counter.value ++;
}

//puede ir sin corchetes
const decrement = () => counter.value --;

const reset = () => {
  counter.value = 0;
}

//accedemos al valor del array y le add el valor del contador
const add = () => {
  arrayFavoritos.value.push(counter.value);  
}

const blockBtn = computed (() => {
  //busca en el array y num seran sus propiedades, y cuando num sea igual al
  //contador, luego una condicion de que si se encunetra el numero en el array
  //retornara la propiedad true o false para habilitar o desactivar el boton
 const numSearch = arrayFavoritos.value.find(num => num === counter.value);
 console.log(numSearch);

 //condicion para esclarecer que el cero puede agregarse solo una ves
 if( numSearch === 0 ) return true;
 return numSearch ? true : false;

// se puede hacer de esta forma pero tendriamos el problema del cero
//  return numSearch || numSearch === 0;
});

//clase que retorna una propiedad computada desde el style class
const classCounter = computed(() =>{
  if(counter.value === 0){
    return 'zero'
  }else if( counter.value > 0){
    return 'positive'
  }else{
    return 'negative'
  }
})
</script>

<template>
<div class="container">


  <h1 v-bind:style="colorP">{{name.toUpperCase()}}</h1> 

  <!-- renderizar el h2 para que cambie el 0-->

   <h2 :class="classCounter">{{ counter }}</h2>

  <button class="btn btn-success" @click="increment">increment</button>
  <button class="btn btn-danger" @click="decrement">decrement</button>
  <button class="btn btn-warning" @click="reset">reset</button>
  <button class="btn btn-primary" @click="add" :disabled="blockBtn">add</button>
  <br>
  <ul>
    <li
    v-for="(num, index) in arrayFavoritos" :key="index">
  {{ num }}
</li>
  </ul>
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