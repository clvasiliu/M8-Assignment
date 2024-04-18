//STEP 1
// const movies = ["Space Balls", "Office Space", "Baby Driver", "Kingsman: Secret Service", "Kingsman: The Golden Circle"];
// console.log(movies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = "Space Balls";
// movies[1] = "Office Space";
// movies[2] = "Baby Driver";
// movies[3] = "Kingsman: Secret Service";
// movies[4] = "Kingsman: The Golden Circle";
// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = "Space Balls";
// movies[1] = "Office Space";
// movies[2] = "Baby Driver";
// movies[3] = "Kingsman: Secret Service";
// movies[4] = "Kingsman: The Golden Circle";
// movies.splice(2, 0, "The King's Man");
// console.log(movies.length);

//STEP 4
// let movies = [];
// movies[0] = "Space Balls";
// movies[1] = "Office Space";
// movies[2] = "Baby Driver";
// movies[3] = "Kingsman: Secret Service";
// movies[4] = "Kingsman: The Golden Circle";
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = [];
// movies[0] = "Space Balls";
// movies[1] = "Office Space";
// movies[2] = "Baby Driver";
// movies[3] = "Kingsman: Secret Service";
// movies[4] = "Kingsman: The Golden Circle";
// movies[5] = "The King's Man";
// movies[6] = "Guardians of the Galaxy";
// for (let movie in movies) {
//     console.log(movies[movie]);
// }

//STEP 6
// let movies = [];
// movies[0] = "Space Balls";
// movies[1] = "Office Space";
// movies[2] = "Baby Driver";
// movies[3] = "Kingsman: Secret Service";
// movies[4] = "Kingsman: The Golden Circle";
// movies[5] = "The King's Man";
// movies[6] = "Guardians of the Galaxy";
// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 7
// let movies = [];
// movies[0] = "Space Balls";
// movies[1] = "Office Space";
// movies[2] = "Baby Driver";
// movies[3] = "Kingsman: Secret Service";
// movies[4] = "Kingsman: The Golden Circle";
// movies[5] = "The King's Man";
// movies[6] = "Guardians of the Galaxy";
// for (let movie in movies.sort()) {
//     console.log(movies[movie]);
// }

//STEP 8
// let movies = [];
// movies[0] = "Space Balls";
// movies[1] = "Office Space";
// movies[2] = "Baby Driver";
// movies[3] = "Kingsman: Secret Service";
// movies[4] = "Kingsman: The Golden Circle";
// movies[5] = "The King's Man";
// movies[6] = "Guardians of the Galaxy";

// let leastFavMovies = [];
// leastFavMovies[0] = "Inside Out";
// leastFavMovies[1] = "Despicable Me 3";
// leastFavMovies[2] = "Frozen";

// console.log("\nMovies I like:\n");
// for (let movie in movies) {
//     console.log(movies[movie]);
// }
// console.log("\nMovies I regret watching:\n")
// for (let movie in leastFavMovies) {
//     console.log(leastFavMovies[movie]);
// }

//STEP 9
// let movies = [];
// movies[0] = "Space Balls";
// movies[1] = "Office Space";
// movies[2] = "Baby Driver";
// movies[3] = "Kingsman: Secret Service";
// movies[4] = "Kingsman: The Golden Circle";
// movies[5] = "The King's Man";
// movies[6] = "Guardians of the Galaxy";

// let leastFavMovies = [];
// leastFavMovies[0] = "Inside Out";
// leastFavMovies[1] = "Despicable Me 3";
// leastFavMovies[2] = "Frozen";

// let concatMovies = movies.concat(leastFavMovies).sort().reverse();
// for (let movie in concatMovies) {
//     console.log(concatMovies[movie]);
// }

//STEP 10
// let movies = [];
// movies[0] = "Space Balls";
// movies[1] = "Office Space";
// movies[2] = "Baby Driver";
// movies[3] = "Kingsman: Secret Service";
// movies[4] = "Kingsman: The Golden Circle";
// movies[5] = "The King's Man";
// movies[6] = "Guardians of the Galaxy";

// let leastFavMovies = [];
// leastFavMovies[0] = "Inside Out";
// leastFavMovies[1] = "Despicable Me 3";
// leastFavMovies[2] = "Frozen";

// let concatMovies = movies.concat(leastFavMovies).sort().reverse();
// console.log(concatMovies.slice(-1)[0]);

//STEP 11
// let movies = [];
// movies[0] = "Space Balls";
// movies[1] = "Office Space";
// movies[2] = "Baby Driver";
// movies[3] = "Kingsman: Secret Service";
// movies[4] = "Kingsman: The Golden Circle";
// movies[5] = "The King's Man";
// movies[6] = "Guardians of the Galaxy";

// let leastFavMovies = [];
// leastFavMovies[0] = "Inside Out";
// leastFavMovies[1] = "Despicable Me 3";
// leastFavMovies[2] = "Frozen";

// let concatMovies = movies.concat(leastFavMovies).sort().reverse();
// console.log(concatMovies.slice(0)[0]);

//STEP 12
// let movies = [];
// movies[0] = "Space Balls";
// movies[1] = "Office Space";
// movies[2] = "Baby Driver";
// movies[3] = "Kingsman: Secret Service";
// movies[4] = "Kingsman: The Golden Circle";
// movies[5] = "The King's Man";
// movies[6] = "Guardians of the Galaxy";

// let leastFavMovies = [];
// leastFavMovies[0] = "Inside Out";
// leastFavMovies[1] = "Despicable Me 3";
// leastFavMovies[2] = "Frozen";

// let concatMovies = movies.concat(leastFavMovies).sort().reverse();

// let replacementMovies = [];
// replacementMovies[0] = "Up";
// replacementMovies[1] = "Despicable Me";
// replacementMovies[2] = "Despicable Me 2";

// let leastFavIndicies = [];
// for (let i = 0; i < 3; i++) {
//     leastFavIndicies[i] = concatMovies.indexOf(leastFavMovies[i]);
// }

// for (let index of leastFavIndicies) {
//     concatMovies[index] = replacementMovies.pop();
// }

// for (let movie in concatMovies) {
//     console.log(concatMovies[movie]);
// }

//STEP 13
// let movies = [["Kingsman: Secret Service", 1], ["Baby Driver", 2], ["Kingsman: The Golden Circle", 3], ["Guardians of the Galaxy", 4], ["Office Space", 5]];
// for (let movie of movies) {
//     console.log(movie.filter(item => typeof item === "string")[0]);
// }

//STEP 14
// let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
// let showEmployee = function(employeeNames) {
//     let employees = "\nEmployees:\n\n";
//     for (let employee of employeeNames) {
//         employees += employee.toUpperCase() + "\n";
//     }
//     return employees + "\n";
// };
// console.log(showEmployee(employees));

//STEP 15
// let filterValues = function(array) {
//     return array.filter(item => item !== false && item !== null && item !== 0 && item !== "");
// };
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16
// let getRandArray = function(array) {
//     return array[Math.round(Math.random() * array.length)];
// };
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(getRandArray(arr));
// console.log(getRandArray(arr));
// console.log(getRandArray(arr));
// console.log(getRandArray(arr));
// console.log(getRandArray(arr));

//STEP 17
// NAIVE O(N) APPROACH OF ITERATING THROUGH ELEMENTS STORING CURRENT MAX
// let getMaxArray = function(array) {
//     let currMax = array[0]
//     for (let item of array) {
//         currMax = (item > currMax)? item : currMax;
//     }
//     return currMax;
// };
// let arr = [104, 1143231, 25421, 34215, 2, 91, 47658798, 53245, 6435, 767, 85, 9];
// console.log(getMaxArray(arr));
//
// SORT THEN GET MAX APPROACH
// let getMaxArray = function(array) {
//     return array.sort((a , b) => a >= b)[array.length - 1];
// };
// let arr = [104, 1143231, 25421, 34215, 2, 91, 47658798, 53245, 6435, 767, 85, 9];
// console.log(getMaxArray(arr));
