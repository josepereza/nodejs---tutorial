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
