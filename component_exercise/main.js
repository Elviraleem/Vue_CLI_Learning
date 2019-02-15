Vue.component('usuarios', {
    template: `#usuarios-template`,
    mounted(){
        axios.get('https://randomuser.me/api/?results=50')
            .then((response)=> {
                console.log(response);
                const listado = response.data.results.map((usuario) => {
                    return {
                        nombre: `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`,
                        correo: usuario.email,
                        foto: usuario.picture.medium
                    }
                })
                this.usuarios = listado;
            }); console.log(this.usuarios)
    },
    computed:{
        filtrarUsuarios(){
            return this.usuarios.filter((usuario) => usuario.nombre.includes(this.busqueda))

        }
    },
    data(){
        return{
            usuarios: [],
            busqueda: '',
        }
    }



});
Vue.component('usuario',{
    props: ['datos'],
    template: `#usuario-template`,
});
new Vue ({
    el: 'main',
   
    

});