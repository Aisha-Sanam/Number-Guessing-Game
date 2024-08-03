import inquirer from "inquirer";
//Compiuter will generate a random number
//User input for guessing number
//compare both number and print result
const randomNumber = 13;
const answers = await inquirer.prompt([
    { name: "userGuessedNumber", type: "number", message: "Please guess a number" },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number");
}
else {
    console.log("You gussed wrong number");
}
