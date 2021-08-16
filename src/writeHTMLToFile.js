const fs = require('fs');

const generateHTML = require("./generateHTML")

const writeHTMLToFile = (teamMemberArray) => {
    try {
        fs.writeFileSync('./dist/team.html', generateHTML(teamMemberArray));
        console.log("team.html created in ./dist")
    } catch (err) {
        console.error(err)
    }
}

module.exports = writeHTMLToFile;