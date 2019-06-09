var array = [
    {  fechas:"2019-10-29",
       registros:52
    },
    {
       fechas:"2017-10-27",
       registros:9
     },
    {
       fechas:"2019-10-26",
       registros:8
    },
    {
       fechas:"2018-10-25",
       registros:5
    },
    {
       fechas:"2017-1-15",
       registros:5
    }
];

console.log(array.sort((a, b) => new Date(a.fechas) > new Date(b.fechas)));

/*[ { fechas: '2017-1-15', registros: 5 },
  { fechas: '2017-10-27', registros: 9 },
  { fechas: '2018-10-25', registros: 5 },
  { fechas: '2019-10-26', registros: 8 },
  { fechas: '2019-10-29', registros: 52 } ]
*/