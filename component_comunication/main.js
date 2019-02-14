/*Vue's core team generally advises against 
the use of Global Event Buses in favor of 
something more robust, such as Vuex.*/

const eventBus = new Vue(); 

Vue.component ('listado-productos', {
    props: ['productos'],
    template: `
        <div>
            <ul>
                <li v-for="producto in productos">
                {{ producto.nombre}} --- {{ producto.precio }} €
                <button @click="addProduct(producto.precio)">+</button>
                <button @click="substractProduct(producto.precio)">-</button>
                </li>
            </ul>
        
        </div>
    `,
    data() {
        return {
            cantidadProducto: 0,
            total: 0,
        }
    },
    methods: {
        addProduct(precio){
           eventBus.$emit('add', precio);
            }, 
      
        substractProduct(precio) {
            eventBus.$emit('substract', precio);
            }
            
        },
    
});

Vue.component ('carrito-compra', {
    template: `
        <div>
            <h1>{{ total.toFixed(2) }} €</h1>
            <h3>{{ cantidadProductos}} productos</h3>
        
        </div>
    
            `,
    data() {
        return {
            total: 0,
            cantidadProductos: 0,
        }
    },
    created(){
        eventBus.$on('add', (precio)=>{
            console.log(precio);
            if(this.total >= 0){
                this.total += precio;
                this.cantidadProductos++;
            }
           
        }),
        eventBus.$on('substract', (precio)=>{
            console.error(precio);
            if(this.total > 0){
                this.total -= precio;
                this.cantidadProductos--;
            }
           
        })
    }

});

new Vue({
    el: 'main',
    data:{
        productos: [
            {nombre: 'Libro ES6', precio: 39},
            {nombre: 'Portátil', precio: 1300},
            {nombre: 'Café', precio: 2},
            {nombre: 'Auriculares', precio: 80},
            {nombre: 'Moleskine', precio: 19},
        ]
    }
    
});