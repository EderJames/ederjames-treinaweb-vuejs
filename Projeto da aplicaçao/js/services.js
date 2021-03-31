var PokeService = {
    API:{
        url: 'https://dev.treinaweb.com.br/pokeapi/',
        get: (urlGet) => {
            return fetch(`${PokeService.API.url}${urlGet}`)
                    .then(response => response.json());
        },
        Pokemon: {
            listAll: () => {
                return PokeService.API.get('pokedex/1')
                        .then(response => {
                            return response.pokemon
                                .map(pokemon => {
                                    pokemon.number = PokeService.getNumberFromURL(pokemon.resource_uri);
                                    return pokemon
                                })
                                .filter(pokemon => pokemon.number < 100)
                                .sort((a, b) => { (a.number > b.number ? 1 : -1) })
                        })
            }
        },
        find: (number) => {
            return PokeService.API.get(`pokemon/${number}`)
        }
    },
    getNumberFromURL: (url) => {
        return parseFloat(url.replace(/.*\/(\d+)\/$/, '$1'))
    }
}