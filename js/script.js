
 //*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

 const app = new Vue( //!Dichiarare Vue;
     {
         el: '#app', //! Dichiarare dentro quale container Vue verrà utilizzato;
         data: {
             msg: 'Hello world!',
             name:'',
             sitename: 'Vue.js ',
             //*Aggiungere alla pagina un’immagine, presa anch’essa da un data
             img: './img/vue_js.jpeg',
             message:  new Date().toLocaleString()
         }
     }
 );

 new Vue ({
     el:'#container',
     data: {
        
     }
 })