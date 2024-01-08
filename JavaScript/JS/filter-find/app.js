// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined



const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

//filter

const youngPeople=people.filter((person)=>
{
    return person.age<=25
});

console.log(youngPeople)
console.log(youngPeople[0].age)//It is in array so we use index to access


const developers=people.filter((person)=>
{
    return person.position==='developer'
});
console.log(developers);
 

// NO match


const seniorDevs = people.filter((item) => item.position === 'senior dev');
console.log(seniorDevs);


// Find

const peter = people.find((person) => person.name === 'peter');
console.log(peter);

// no match

const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);


// multiple matches

const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

const anna = people.filter((person) => person.name === 'anna');
console.log(anna);

console.log(peter.position);
console.log(anna[0].position);