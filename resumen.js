//.forEach()

// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
  
  /* What you need
  [20, 24, 56, 88]*/

  var officersIds = [];

officers.forEach(function (officer) {
  officersIds.push(officer.id);
});
console.log (officersIds); //[ 20, 24, 56, 88 ]

// .map()


       //classic
   var officersIds = officers.map(function (officer) {
    return officer.id;
  }); 
  
 
       //ES6 - arrow functions
  const officersIds2 = officers.map(officer => officer.id);

  console.log (officersIds);   // [ 20, 24, 56, 88 ]
  console.log (officersIds2);   // [ 20, 24, 56, 88 ]


  //.reduce()

  var pilots = [{
    id: 10,
    name: "Poe Dameron",
    years: 14,
},
{
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
},
{
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
},
{
    id: 99,
    name: "Ello Asty",
    years: 22,
}
];

//classic
var totalYears = pilots.reduce(function (accumulator, pilot) {
return accumulator + pilot.years;
}, 0);


//ES6's arrow functions
const totalYears2 = pilots.reduce((acc, pilot) => acc + pilot.years, 0);


console.log(totalYears); // 82
console.log(totalYears2); // 82


//.filter()

var pilots = [{
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
},
{
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
},
{
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
},
{
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
}
];

//classic
var rebels = pilots.filter(function (pilot) {
return pilot.faction === "Rebels";
});

var empire = pilots.filter(function (pilot) {
return pilot.faction === "Empire";
});


//arrow function
const rebels2 = pilots.filter(pilot => pilot.faction === "Rebels");
const empire2 = pilots.filter(pilot => pilot.faction === "Empire");



console.log(empire);
/* [ { id: 8, name: 'Ciena Ree', faction: 'Empire' },
{ id: 40, name: 'Iden Versio', faction: 'Empire' } ]
*/

console.log(empire2);
/* [ { id: 8, name: 'Ciena Ree', faction: 'Empire' },
{ id: 40, name: 'Iden Versio', faction: 'Empire' } ]
*/

//arrayfind 

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

const result = inventory.find( fruit => fruit.name === 'cherries' );

console.log(result) // { name: 'cherries', quantity: 5 }
console.log(result.quantity) // {  5 }

//arrayfechas

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
