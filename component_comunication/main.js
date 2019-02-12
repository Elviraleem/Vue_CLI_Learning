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
            this.cantidadProducto++;
            this.total += precio
        },
        substractProduct(precio) {
            this.cantidadProducto--;
            this.total -= precio;
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