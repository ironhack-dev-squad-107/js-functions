// function definition: writing the recipe
function hello(person, lang) {
	switch (lang) {
		case "french":
			console.log("Bonjour, " + person + " !");
			break;

		default:
			console.log("Hello, " + person + "!");
			break;
	}
}
// function PARAMETERS are the variables that the function receives
// (person, lang)

// function call (a.k.a. invocation): cooking the recipe
hello("Abi", "english");
hello("Chloé", "german");
hello("Laura", "french");
// function ARGUMENTS are the input values you provide when you
// CALL the function ("Abi", "english", "Chloé", "german", "Laura", "french")
