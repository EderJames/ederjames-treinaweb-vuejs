Vue.component('my-list', {
    template: `
        <router-link :to="number">
            <li class="poke-list-item">
                <img :src="sprite"/>
                <span>{{pokemon.number | pokeNumber }} - {{pokemon.name}}</span>
            </li>
        </router-link>
    `,
    props: ['pokemon'],
    computed:{
        number: function(){
            return Vue.filter('pokeNumber')(this.pokemon.number);
        },
        sprite: function(){
            return `https://serebii.net/pokedex-xy/icon/${this.number}.png`
        }
    }
})