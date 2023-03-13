

function createCardElement (type, content = null) {

    let element = document.createElement(type);

    if(type === 'img'){
        element.src = content;
    }
    else if(type === 'input'){
        element.value = content;
    }
    else {
        element.innerText = content;
    }

    return element;


}