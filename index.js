const inquirer = require("inquirer");

const generateHTML = require("./src/generateHTML");
const getQuestions = require("./src/getQuestions");
const writeHTMLToFile = require("./src/writeHTMLToFile");

const teamMemberArray = []


const fs = require('fs');


const promptUser = (role) => {
        return inquirer.prompt(getQuestions(role));
  };


const promptFromDetails = (role) => {
    return promptUser(role)
      .then((userInput) => teamMemberArray.push(userInput))
      .catch((error) => console.error(error));
  };

const promptForRole = () => {
    return inquirer.prompt([{   
        type: 'list',
        message: 'What is the role of the employee you would like to add?',
        name: 'role',
        choices: ["Manager", "Engineer", "Intern"]
    }])
  }
const addTeamMember = () => {
    if (teamMemberArray.length <= 5){
        promptForRole()
        .then(userInput => promptFromDetails(userInput.role))
        .then(addTeamMember())
        .catch((error) => console.error(error));
    } else {
        generateHTML()
    }
}

addTeamMember();