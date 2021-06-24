
 //*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

 const app = new Vue(
     {
         el: '#app',
         data: {
             msg: 'Hello world!',
             sitename: 'Vue.js ',
             //*Aggiungere alla pagina un’immagine, presa anch’essa da un data
             img: './img/vue_js.jpeg'
         }
     }
 )

 