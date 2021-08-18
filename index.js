const inquirer = require("inquirer");

const employeeQuestions = require("./src/employeeQuestions");
const writeHTMLToFile = require("./src/writeHTMLToFile");

const teamMemberArray = []

const promptForRole = () => {
    return inquirer.prompt([{   
        type: 'list',
        message: 'What is the role of the employee you would like to add?',
        name: 'role',
        choices: ["Manager", "Engineer", "Intern"]
    }])
}

const promptForDetails = (role) => {
    const questions =  employeeQuestions(role)
    inquirer.prompt(questions)
    .then((userInput) => {
     teamMemberArray.push(userInput);
     addTeamMember();
     })
 };

const addTeamMember = () => {

    if (teamMemberArray.length < 5){
        console.clear();
        promptForRole()
        .then(userInput => {
        const { role } = userInput;
        promptForDetails(role)})

    } else {
        writeHTMLToFile(teamMemberArray);
    }
}

addTeamMember()
