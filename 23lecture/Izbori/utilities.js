function getEl(id){

    return document.getElementById(id);
}


function makeAPICall (url, options) {
    return fetch(url, options)
        .then(response => {

         if(response.ok){
            
             return new Promise ((res,rej) => {
                response.json()
                .then(result => res(result))
                .catch(error => res(error))
             })
             
         }

         return new Promise ((resolve, reject) => {
            response.json().then(body => {
                reject(new Error (body.message))   
             })
         })
     })
}


function debounce (action, seconds) {

    let timerId = null;

    return function (...event){
        clearTimeout(timerId);
        timerId = setTimeout(action,seconds,...event);

    }

}