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