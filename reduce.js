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