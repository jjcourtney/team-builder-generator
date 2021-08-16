const Card = require("./Card");

const generateHTML = teamMemberArray => {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css" integrity="sha512-y6ZMKFUQrn+UUEVoqYe8ApScqbjuhjqzTuwUMEGMDuhS2niI8KA3vhH2LenreqJXQS+iIXVTRL2iaNfJbDNA1Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>Document</title>
    </head>
    <body>
        <header class="h-28 bg-blue-800 justify-center flex items-center">
            <h1 class="text-5xl text-blue-300">My Team</h1>
        </header>
        <main class="flex justify-around flex-wrap">
        ${generateCards(teamMemberArray)}
        </main>
    </body>
</html>`

}

// takes an array of Team member objects
const generateCards = teamMemberArray => {
    generatedHTML = "";
    teamMemberArray.forEach(( teamMember) => {
        
        const memberHTML = new Card(teamMember).getCardHTML();
        generatedHTML.concat(`\n`, memberHTML);
    });
    return generatedHTML;

}

module.exports = generateHTML;