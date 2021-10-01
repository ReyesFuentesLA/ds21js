
//1. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

const num = 1000;
function Eratosthenes(num) {
   const numArr = new Array(num + 1);
   numArr.fill(true);
   numArr[0] = numArr[1] = false;
   for (let i = 2; i <= Math.sqrt(num); i++) {
      for (let j = 2; i * j <= num; j++){
          numArr[i * j] = false;
      }
   }
   return numArr.reduce((acc, val, ind) => {
      if(val){
         return acc.concat(ind);
      }else{
         return acc;
      };
   },[]);
};
console.log(Eratosthenes(num));