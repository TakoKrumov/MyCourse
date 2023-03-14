//join METHOD
console.log(`----array join method----`);

let countries = ['Romania','Bulgaria','Serbia'];

let results = countries.join('-');/* this method need to have what to do when joining
the elements together and returning them as string(by default is joining them with "," 
without spaces between!!) */

console.log(results);

results = countries.join();
console.log(results);