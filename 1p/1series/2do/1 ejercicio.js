//1. Fibonacci
//   fibonacci(n)
// -> n integer
// <- the n first fibonacci elements


var serie_fibonacci = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = serie_fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(serie_fibonacci(8));