Vue.component('listado-tareas',{
    template:`
            <div>
                <ul>
                    <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                
                </ul>
            
            
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
})


new Vue({
    el: 'main'


}) 

