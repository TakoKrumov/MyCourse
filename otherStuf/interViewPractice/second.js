const privateCounter = () => {
  let count = 0;

  return {
    increment: (val = 1) => {
      count += val;
    },

    getValue: () => {
      return count;
    }
  };
};

const counter = privateCounter();

console.log(counter);
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());


let count = 1;

const prvCount = () => {
  let value = count;
  value += count;

  return value;
}

console.log(prvCount());

const privateSecret = () => {
  const secret = 'fck you!';

  return ()=>secret;
}

const expose = privateSecret();

console.log(expose());