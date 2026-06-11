const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dcHeroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];
//marvelHeroes.push(dcHeroes);
//console.log(marvelHeroes); // Output
//console.log(marvelHeroes[5][1]); // Output: ["Superman", "Batman
//let allHeroes = marvelHeroes.concat(dcHeroes);
//console.log(allHeroes); // Output
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes); // Output:
const anotherArray = [1, 2, 3,[4, 5],6,7,[8, 9,[10, 11]]];
const flattenedArray = anotherArray.flat(1);// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9,[10, 11]]
const fullyFlattenedArray = anotherArray.flat(Infinity); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(fullyFlattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(Array.isArray("harry"));
console.log(Array.from("harry"));
console.log(Array.from({name: "harry"}));//interesting case

let score1=45 ,score2=50, score3=40;
console.log(Array.of(score1,score2,score3));


