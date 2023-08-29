<!-- componentes con extension .vue -->
<!-- SFC componentes de un solo archivo son los componentes
necesarios como el script, el template y el style-->
<template>

<div>
<!-- concepto data bianding, directiva dos puntos inyectar propiedad -->
    <!-- cambiamos el texto del alt y le pasamos una propiedad nombre -->
<img :src= "url" alt="nombre">

    <h2>{{nombre}}</h2>
<!-- podemos pararle la misma url aqui -->
    <a :href= "url"
    target="_blank">Descargar</a>
  </div>

</template>

<script>
export default{
    // con esto mandamos el nombre de la propiedad desde el script hacia el html
    //podemos ingresar el nombre que querramos y lo leera igual
    //y podemos pasarle el tipo de dato convirtiendo a objeto
    // props: ["url"]
    props: {
        url: {
            String,
        },
        nombre: {
            String,
        }
    }
}

</script>

<style  scoped>
h2{
    margin-bottom: 10px;
}
img{
    width: 10rem;
    padding: 0.5rem;
  }

div{
    display: inline-block;
    text-align: center;
    border: 1px solid #f2f2f2;
    padding: 1%;
    border-radius: 5px;
    margin: 4px;
}

a{
    background-color: yellow;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #f2f2f2;
  
}
  </style>