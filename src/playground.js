export const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
};

// export const multiply = (a, b) => a * b;


export const multiply = (a, b) => {
 let total = 0;
 for(let i=0; i<a ; i++){
  total += b;
 }
  return total;
};