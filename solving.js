// q4)
// const array=[];
//  const base=2;
//  function Exponentiation (){
//  for(let i=1;i<=4;i++){
//      let num=prompt("Please enter the number");
//      array.push(num ** base);
//  }
//  console.log(array)
// }


// Q5)

// const array=[];
// const newarray=[];
// function pusharray(){
//     for(let i=0;i<=4;i++){
//         let values=prompt("Enter the value:");
//         array.push(values);
        
// }
// array.map(values=>{
//     if(isNaN(values)){
//         newarray.push("n/a")
//     }
//     else if(values%2==0){
//         newarray.push("even");    
// }
// else if(values%2!=0){
//     newarray.push("odd"); 
// }
// })
// console.log(array);
// console.log(newarray);
// }



// // q6)
// const array=[];
// const newarray=[];
// function fizzbuzz(){
//     for(let i=0;i<=4;i++){
//                 let values=prompt("Enter the value:");
//                 array.push(values);

// }
// array.forEach(values=>{
//     if (values%5==0&&values%3==0) {
//         newarray.push("Fizz Buzz");
//     }
//     else if (values%5==0) {
//         newarray.push("Buzz");
//     }
//     else if (values%3==0) {
//         newarray.push("Fizz");
//     }

// })
// console.log(array);
// console.log(newarray);
// }



// Q7)
// const names=["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];
// const newname=[];
// function namear() {
//     names.forEach(element => {
//         newname.push(element);
        
//     });
//     console.log(newname);
// }

// Q8)
// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
//          ];
//         const seres=[];

//          function Series(id,title) {
//             newSeries.forEach(element => {
//                 seres.push({
//                    id:element.id , 
//                    title:element.title },
//                 );
                
//             });
//             console.log(seres);
//          }

// Q9)

// function Series(id,title) {
//                 newSeries.map(element => {
//                     seres.push({
//                        id:element.id , 
//                        title:element.title },
//                     );
                    
//                 });
//                 // 
//                 return seres;
//              }
//              console.log(seres);

// Q10)

// function Seriesfilter(){
// newSeries.forEach(element => {
//                     seres.push(element);
                    
//                 });
              
//                 console.log(seres.filter((seres)=> seres.rating <5));
//                    }
                   
//Q11)

// const strings = ["Java", "JavaScript", "Python", "C++", "PHP"];
// function largest() {
    

// const longestString = strings.reduce((acc, current) => {
//   // Compare the length of the current string with the length of the accumulated (longest) string
//   return current.length > acc.length ? current : acc;
// },);
// console.log(longestString);
// }


//Q12)

// let pokemonData =[
//     {
//       "game_index": 76,
//       "version": {
//         "name": "red",
//         "url": "https://pokeapi.co/api/v2/version/1/"
//       }
//     },
//     {
//       "game_index": 76,
//       "version": {
//         "name": "blue",
//         "url": "https://pokeapi.co/api/v2/version/2/"
//       }
//     },
//     {
//       "game_index": 76,
//       "version": {
//         "name": "yellow",
//         "url": "https://pokeapi.co/api/v2/version/3/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "gold",
//         "url": "https://pokeapi.co/api/v2/version/4/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "silver",
//         "url": "https://pokeapi.co/api/v2/version/5/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "crystal",
//         "url": "https://pokeapi.co/api/v2/version/6/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "ruby",
//         "url": "https://pokeapi.co/api/v2/version/7/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "sapphire",
//         "url": "https://pokeapi.co/api/v2/version/8/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "emerald",
//         "url": "https://pokeapi.co/api/v2/version/9/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "firered",
//         "url": "https://pokeapi.co/api/v2/version/10/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "leafgreen",
//         "url": "https://pokeapi.co/api/v2/version/11/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "diamond",
//         "url": "https://pokeapi.co/api/v2/version/12/"
//       }}
//     ]
//     function displayName(data) {
//         return data.reduce((names, entry)=>{
//           names.push(entry.version.name);
//           return names;
//         }, []);
//       }
//       const namesArray = displayName(pokemonData);
//       console.log(namesArray);

//Q13)

// A 
//Hi Coach ! Rawan ?      becuse exeunt the function and return the first name value


// B
//Car owner? undefined  ?   becuse the car value in block you need to defined after this



//c
//     print nathings    ? becuse the address defined after call in function




