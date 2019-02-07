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
            console.log("in");
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                 console.log(response);

            });
                 
            }

        }
    
        
});