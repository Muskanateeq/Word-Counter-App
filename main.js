#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "Input",
        message: "Write sentence to count the words"
    }
]);
const word = answer.Sentence.trim().split(" ");
console.log(chalk.green(word));
console.log(("word count number is"), chalk.green(`${word.length}`));
