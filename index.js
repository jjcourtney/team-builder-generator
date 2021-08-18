const inquirer = require("inquirer");

const employeeQuestions = require("./src/employeeQuestions");
const writeHTMLToFile = require("./src/writeHTMLToFile");

const teamMemberArray = []

const promptForRole = () => {
    return inquirer.prompt([{   
        type: 'list',
        message: 'What is the role of the employee you would like to add?',
        name: 'role',
        choices: ["Engineer", "Intern", "Generate team page"]
    }])
}


const promptForDetails = (role) => {
    if (role === "Generate team page"){
        writeHTMLToFile(teamMemberArray);
    } else {
        const questions =  employeeQuestions(role)
        inquirer.prompt(questions)
        .then((userInput) => {
        userInput.role = role;
        teamMemberArray.push(userInput);
        addTeamMember();
    })
    };
}
const addTeamMember = () => {

    console.clear();
    promptForRole()
    .then(userInput => {
    const { role } = userInput;
    promptForDetails(role)})
}


promptForDetails("Manager")
