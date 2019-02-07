new Vue ({
    el: 'main',
    mounted(){
        this.getToDos();
    },
    
    data:{
        tareas: []
    },
    
    methods: {
        getToDos(){
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                 this.tareas = response.data;

            });
                 
            }

        }
    
        
});