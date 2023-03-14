//splice method 
console.log(`----array splice method----`);
let numbers = [1, 2, 3, 4, 5];
//is a method that CHANGE the ARRAY that we use!!! arrayWeUse.splice()!!! and returns the elements thar are removed from it!!!
let deleted = numbers.splice(2, 3, 'abala',NaN,null);
/* .splice(firstValue, secondValue, anyOtherValue) 
  firstValue - from which index to start 
  secondValue - how many indexes after start to take
  anyOtherValue - anything after first and second value gonna be added to our original array on place
  of the removed elements.
  If there are nothing in .splice() nothing gonna change; 
  if we put only firstValue gonna use it as start for removing and gonna go till the end of the array if there
  is no secondValue (which says how many items to remove)!!
  if there is nothing on anyOtherValue - its gonna only remove element without adding new ones!!!
*/
console.log(deleted);
console.log(numbers);


numbers = [1, 2, 3, 4, 5];
deleted = numbers.splice(2, 0, 'abala',NaN,null);
/* here we dont delete anything because the secondValue that gives how many times to do the removing 
   is 0 so splice becomes like .push/.unshift method but you can pick the exact position you wanna put the new elements!!!
*/
console.log(deleted);/* nothing is deleted !!! .splice (startingIndex, howMuchToRemove(if 0 its not removing anything its just 
  a push method from where to start => startIndex!!!), whatToAdd[0]....whatToAdd[i]);
  */
console.log(numbers);