const eventBus = new Vue;

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

                <li>{{ total }} €</li>
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

Vue.component ('carrito-compra' {
    template: `
        <div>
            <h1>{{ total.toFixed(2) }} €</h1>
            <h3>{{ cantidadProductos}} productos
        
        </div>
    
            `,
    data() {
        return {
            total: 0,
            cantidadProductos: 0,
        }
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