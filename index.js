const inquirer = require('inquirer');
const fs = require('fs');
const fileDestination = ('');

function promptUser(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What three letters would you like to use for your logo?',
            name: 'logoText',
            validate: (answer) => {
                if (answer.length > 3) {
                    return console.log("\n Text must be three characters or less! Please try again");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What color text would you like for your logo? You can use a keyword or hexadecimal number.',
            name: 'logoColor',
        },
        {
            type: 'list',
            message: 'What shape would you like to use for your logo?',
            name: 'shape',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            message: 'What color would you like your shape to be? You can use a keyword or hexidecimal number.',
            name: 'shapeColor',
        },
    ])
    .then((response) => {
        console.log(response.logoText, response.logoColor, response.shape, response.shapeColor);
    });
}

promptUser();