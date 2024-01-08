/*const person = ['hello', 'great'];

const testPerson = person.map(function (item) {
  console.log(item);
});

const newPerson = person.map(function (item) {
  if (item === 'hello') {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);
*/
const person={
    name:'John',
};
console.log(person.name);
person.age=25;
console.log(person);

const item={
    'featured-items':['item1','item2'],
};

console.log(item['featured-items']);
console.log(person['name']);

let appState='loading';
//appState='error';
const keyName='Search';
const app={
   [appState]:true
}
app[keyName]='apple';

console.log(app);

const state={
    loading:true,
    name:'',
    job:''

}

function updateState(key,value){
    state[key]=value;
 
}
console.log(state);
updateState('name','John');
updateState('job','developer');
updateState('loading',false);
updateState('products',[]);
console.log(state);