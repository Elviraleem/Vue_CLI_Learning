Vue.config.devtools = true

Vue.component ('sort-names', {
     props: ['listado'],
     template: '#sort-names-template',
     methods:{
         
     },
     computed:{
          
          sortNames(){
               return this.participantes.sort();
          }
         

     },
     data(){
          return{
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