// task 1: Create your own JavaScript object representing your
//    favorite movie. Include at least 5 properties: movie title,
//    director, release year, actors (make this an array with at
//    least 3 elements), and length of movie in minutes.
//    Feel free to add more!
let favmovie = {
  title: "The Breadwinner",
  director: "Nora Twomey",
  year: 2017,
  actors: ["Saara Chaudry", "Soma Chhaya", "Noorin Gulamgaus"],
  timeMinutes: 94
};
// task 2: After you have created your movie object, console log the
//    title of your movie using dot notation.
console.log(favmovie.title);
// task 3: Console log the director's name
console.log(favmovie.director);
// task 4: Console log the release year.
console.log(favmovie.year);
// task 5: Use bracket notation in combination with dot notation to
//    access one of the actors and console log their name.
console.log(favmovie.actors[1]);
// task 6: Add an actor to the arrays of actors. Console log the array
//    to check the actor was added.
favmovie.actors.push("Laara Sadiq");
console.log(favmovie.actors[3]);
// task 7: Oh, no! One of the actors has been cancelled! Remove one
//    of the actors from the array. Console log the array to check
//    the actor was removed.
favmovie.actors.splice(2, 1);
console.log(favmovie.actors);
// task 8: An extended director's cut has been release for your movie!
//    Add 20 minutes to the duration. Console log duration.
favmovie.timeMinutes = favmovie.timeMinutes + 20;
console.log(favmovie.timeMinutes);
