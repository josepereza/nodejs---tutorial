var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
       //classic
   var officersIds = officers.map(function (officer) {
    return officer.id;
  }); 
  
 
       //ES6 - arrow functions
  const officersIds2 = officers.map(officer => officer.id);

  console.log (officersIds);   // [ 20, 24, 56, 88 ]
  console.log (officersIds2);   // [ 20, 24, 56, 88 ]
