<!-- componentes con extension .vue
SFC componentes de un solo archivo son los componentes
necesarios como el script, el template y el style-->
<template>

<!-- podemos exportar el componente llamandolo en la etiqueta con mayuscula
y aceptar el export, esto crea un nuevo componente en el script por default 
por ende todo en la pagina desaparece y debemos hacerle un slots osea un hijo al
componente padre y llamarlo dentro de la etiqueta en el Grid.vue-->
<grid>
<!-- concepto data bianding, directiva dos puntos inyectar propiedad -->
    <!-- cambiamos el texto del alt y le pasamos una propiedad nombre -->
<img :src= "url" alt="nombre">

    <h2>{{nombre}}</h2>
<!-- podemos pararle la misma url aqui -->
    <a :href= "url"
    target="_blank">Descargar</a>
</grid>

</template>

<script>
import Grid from './Grid.vue';

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
    },
    components: { Grid }
}

</script>

<style  scoped>
h2{
    margin-bottom: 10px;
}
img{
    width: 8rem;
    height: 8rem;
    padding: 0.5rem;
  }

a{
    background-color: yellow;
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid #f2f2f2;
  margin: 2px;
}
  </style>