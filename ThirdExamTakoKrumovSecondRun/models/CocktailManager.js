class CocktailsManager {

  getCocktailOfTheDay = () => {
    return makeAPICall('https://www.thecocktaildb.com/api/json/v1/1/random.php')
           .then(result => result)
  }

  getCocktailById = (id) => {

    return makeAPICall(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
           .then(result => result)
  }

  getRandomCocktailsByLetter = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    let input = null; 
    for(let i=0; i>=0; i++) {

      let chance = Math.floor(Math.random()*10) > 6 ? true : false;
      if(chance) {
        
        input = alphabet[Math.floor(Math.random()*26)]
        console.log(input)
        return makeAPICall(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`);
      }

    } 
    
  }

  getFavCocktails = () => {

    const sessionId = fromLocalStorage('loggedUser').sessionId

    return makeAPICall(SERVER_URL + '/favorite-cocktails', {
      headers: {
        'identity': sessionId
      }
    })
  }
  
  search = (input) => {

    return makeAPICall(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
           .then(result => result)
  }

  addToFavorites = (cocktailId) => {
    const sessionId = fromLocalStorage('loggedUser').sessionId
    return makeAPICall(SERVER_URL +  '/favorite-cocktails',{
      method: 'POST',
      headers: {
        'identity': sessionId,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id: cocktailId
      })
    })
  }

  removeFromFav = (cocktailId) => {
    const sessionId = fromLocalStorage('loggedUser').sessionId
    return makeAPICall(SERVER_URL +  '/favorite-cocktails',{
      method: 'DELETE',
      headers: {
        'identity': sessionId,
        'cocktailId': cocktailId
      }
    })
  }

}