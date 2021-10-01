//2. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]

var h=40;
gen(h);
function gen(h){
var ho = Math.floor(Math.random()*h);
console.log(ho);
}