//2.- Map
const mapa=new Map()
var tf=0
function ini(){
  t0=performance.now();
}
function fin(){
t1=performance.now();
}
function gen(){
return Math.floor(Math.random()*(10000-1)+1);
}
for(k=0;k<7; k++){
  ini()
  for(i=0;i<100000;i++){
   mapa.set(i,"Name"+gen());  
   }
  fin()
  ti = t1-t0;
    tf = tf+ti;
}

console.log(mapa)
console.log("Promedio: "+tf/7);
