// const person={
//     name:'Hamza',
//     age:20,
//     location:{
//         city:'Bulandshahr',
//         temp:90
//     }
// }

// const {name:firstName='Anonymous',age}=person;
// console.log(`${firstName} is ${age} .`)

// const {city,temp:temperature}=person.location;
// if(city && temperature){
//     console.log(`I lived in ${city}  and temperature is ${temperature}`)
// }
const item=['Chicken','Rs 100','Rs 200','Rs 300']
const [name,,medium]=item;
console.log(`A medium ${name} cost is ${medium}`)