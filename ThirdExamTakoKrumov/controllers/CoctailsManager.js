class CocktailsManager {

  getCocktailOfTheDay = () => {
    

    return makeAPICall('https://www.thecocktaildb.com/api/json/v1/1/random.php')
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


  getCocktailById = (id) => {

    return makeAPICall(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(result => result)
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

/*
6. Премахване от любими:
a. Метод: DELETE
b. url: /favorite-cocktails
c. required headers: ‘identity’ : <sessionId>, ‘cocktailId’ : <cocktailId>
d. possible responses: 401, 400, 200
*/