new Vue ({
    el: 'main',
    mounted(){
     axios.get('https://jsonplaceholder.typicode.com/todos')
     .then((response) => {
          this.tareas = response.data;

     });
    },
    
    data:{
        tareas: []
    },
    
    methods: {
     

        }
    
        
});