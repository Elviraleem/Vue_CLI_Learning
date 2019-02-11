Vue.config.devtools = true

Vue.component ('elegir-ganador', {
     props: ['listado'],
     template: '#elegir-ganador-template',
     methods:{
          elegirGanador(){
               cantidad = this.participantes.length;
               indice = Math.floor((Math.random()) * cantidad);
               this.ganador = this.participantes [indice-1];
          }
     },
     data(){
          return{
               ganador: false,
               participantes: this.listado
          }
     }

})

new Vue ({
    el: 'main',
    data:{
         personas:[
              "Anna", "Ling", "Andras", "Claudia", "Ernest", "Elvira"
          ]
    }
    
        
});