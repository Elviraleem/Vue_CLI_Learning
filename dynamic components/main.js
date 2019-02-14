Vue.component('listado-tareas',{
    template:`
            <div>
                <ul>
                    <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                
                </ul>
                <hr>
            
            
            </div>
            `,
    
    
    data() {
        return{
            tareas:[
                'Terminar ejercicios sobre componentes',
                'Ir a la reunión de la escuela',
                'Llamar al oftalmólogo',
                'Preparar la cena',
                'Terminar el libro de Kapuscinski'
            ]
        }
    }

});

Vue.component('tarea', {
    props:['tarea'],
    template:
        `<li>{{ tarea }}</li>`
});
Vue.component('contacto', {
    template: 
        `<div><p>Mail de contacto: <a href="mailto:elviraleem@gmail.com">elviraleem@gmail.com</a></p><hr></div>`
});

Vue.component('bio', {
    template: 
        `<div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta expedita sit saepe earum! Dolorum, consectetur veniam ad autem iusto totam.</p><hr></div>`
});



new Vue({
    el: 'main',
    data:{
        seleccionado: 'listado-tareas'

    }
    

});

