// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'yellow'; // TODO: change this to your favorite color from the list
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.
// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: Have a final else that will catch indigo and violet.

// TODO: In the else, log: I do not know anything by that color.
// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
if (color === 'red') {
		console.log("Apples are red.");

} else if (color === 'orange') {
		console.log("Carrots are orange.");

} else if (color === 'yellow') {
		console.log("Canaries are yellow.");

} else if (color === 'green') {
		console.log("Leaves are green.");

} else if (color === 'blue') {
		console.log("Water is blue.");

} else {
	console.log("I do not know anything by that color.")
}

(color === favorite) ? console.log(color + " Is my favorite color") : console.log(color + " Is not my favorite color.");






