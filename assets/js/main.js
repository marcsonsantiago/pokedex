const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 9
const limit = 5
let offset = 0

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) =>{
    const newHtml = pokemons.map((pokemon) => `
      <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="details">
          <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>
      
          <img src="${pokemon.photo}" alt="${pokemon.name}">
          
        </div>
      </li>
    `).join('')

    pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  let qtdRecordsNextPage = offset + limit
  
  if (qtdRecordsNextPage >= maxRecords) {
    let newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)
    
    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
    loadPokemonItens(offset, limit)
  }
})


// PROF


// const pokemonList = document.getElementById('pokemonList')
// const loadMoreButton = document.getElementById('loadMoreButton')

// const maxRecords = 9
// const limit = 5
// let offset = 0;

// function convertPokemonToLi(pokemon) {
//     return `
//         <li class="pokemon ${pokemon.type}">
//             <span class="number">#${pokemon.number}</span>
//             <span class="name">${pokemon.name}</span>

//             <div class="detail">
//                 <ol class="types">
//                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                 </ol>

//                 <img src="${pokemon.photo}"
//                      alt="${pokemon.name}">
//             </div>
//         </li>
//     `
// }

// function loadPokemonItens(offset, limit) {
//     pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
//         const newHtml = pokemons.map(convertPokemonToLi).join('')
//         pokemonList.innerHTML += newHtml
//     })
// }

// loadPokemonItens(offset, limit)

// loadMoreButton.addEventListener('click', () => {
//     offset += limit
//     const qtdRecordsWithNexPage = offset + limit

//     if (qtdRecordsWithNexPage >= maxRecords) {
//         const newLimit = maxRecords - offset
//         loadPokemonItens(offset, newLimit)

//         loadMoreButton.parentElement.removeChild(loadMoreButton)
//     } else {
//         loadPokemonItens(offset, limit)
//     }
// })