#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\WellCome To CodeWithRehan - CLI Number Gussing Game\n");

const randomnumber= Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGussednumber",
        type:"number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);
if(answer.userGussednumber === randomnumber){
    console.log("Congratulation ! You guess a correct number.");
}
else{
    console.log("Sorry, You guess a wrong number");
}