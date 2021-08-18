const employeeQuestions = role => [{type: 'input',
    message: `What is the ${role}'s name?`,
    name: 'name',
    validate: input => input === "" ? false : true
},
{
    type: 'input',
    message: 'What is their id number?',
    name: 'id',
    validate: input => input === "" ? false : true
},
{
    type: 'input',
    message: 'What is their email address?',
    name: 'email',
    validate:  input => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)

},
{
    type: 'input',
    message: getUniqueQuestion(role),
    name: 'uniqueData',
    validate: input => input === "" ? false : true
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