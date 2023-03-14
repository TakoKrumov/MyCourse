/*
7*. Create a web page containing one simple input with autocomplete options.
When the user start typing you need to create AJAX request to this endpoint:
https://api.thecatapi.com/v1/breeds/search?q={USER_INPUT}
Display the suggested options below the input element. When the user selects an option display
more info for this breed to the page.
*/

fetch("https://api.thecatapi.com/v1/breeds/search?q=die")
.then(response => console.log(response.json()))