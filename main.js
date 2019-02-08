Vue.component('mis_tareas', {
     props:['tasks'],
     template:`<ul><li v-for="tarea in tasks">{{ tarea.title }} </li></ul>`,

});

new Vue ({
    el: 'main',
    mounted(){
     axios.get('https://jsonplaceholder.typicode.com/todos')
     .then((response) => {
          this.tareas = response.data;

     });
    },
    
    data:{
        tareas: [],
        tareasCasa: [
             {title: "Hacer la compra"},
             {title: "Cocinar"},
             {title: "Arreglar la bici"}
            
        ]
    },
    
        
});