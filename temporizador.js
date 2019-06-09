function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 
  function demo() {
    setTimeout(()=>{console.log('timeout demo')}, 4000);
    promesa=sleep(7000);
    promesa.then ((resol,reject)=>{
        console.log('esto es sleep')
    } );
   
  }
  demo();

const tempo =setTimeout(()=>{
    console.log('Es un temporizador');
},3000);
let libros= [{name:"padrino",precio:{italia:100,francia:50},autor:"conernelio"},{name:"tiptop",precio:{italia:200,francia:300},autor:"andores dobarro"}];
console.log( libros[0].precio.italia);
console.log( libros[1].precio.francia);


const intervalo=setInterval(()=>{
    console.log('es un intervalo');

},2000);
console.log('ejecucion inmediata');