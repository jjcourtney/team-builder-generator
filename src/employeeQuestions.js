const employeeQuestions = role => [{type: 'input',
    message: `What is the ${role}'s name?`,
    name: 'name'
},
{
    type: 'input',
    message: 'What is their id number?',
    name: 'id'
},
{
    type: 'input',
    message: 'What is their email address?',
    name: 'email'
},
{
    type: 'input',
    message: getUniqueQuestion(role),
    name: 'uniqueData'
}];

const getUniqueQuestion = role => {
    let roleQuestion = "";
    
    switch (role){

        case "Manager" : 
            roleQuestion = "What is their office number?";
            break;

        case "Engineer" : 
            roleQuestion = "What is their github id?";
            break;

        default:
            roleQuestion = "What school do they attend";
            break;
    }
    return roleQuestion;
}

module.exports = employeeQuestions;