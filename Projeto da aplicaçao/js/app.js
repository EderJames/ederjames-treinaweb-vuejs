const app = new Vue({
    el: '#app',
    router: myRouter,
    data: {
        pokemonList:[],
        nameFilter: ''
    },
    mounted: function(){
        PokeService.API.Pokemon.listAll().then(pokemonList => {
            this.pokemonList = pokemonList;
        })
    },
    computed: {
        pokeList: function(){
            var nameFilter = this.nameFilter.toLowerCase();
            return this.pokemonList.filter( pokemon => pokemon.name.includes(nameFilter) )
        }
    }
})