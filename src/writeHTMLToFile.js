const writeHTMLToFile = () => {
    try {
        const data = fs.writeFileSync('./dist/team.html', generateHTML(teamMemberArray));
        console.log("team.html created in ./dist")
    } catch (err) {
        console.error(err)
    }
}

module.exports = writeHTMLToFile;