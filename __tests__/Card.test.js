const card = require("../src/Card");


describe("Card", () => {
    describe("generateHTML", () => {
        it("should return the correctly formatted HTML", () => {
            const testArr = [{
                name: "John",
                id: 1,
                email: "asdasdasd@aasdsd.com",
                role: "Manager",
                uniqueData: 1
            },
            {
                name: "John",
                id: 2,
                email: "asdasdasd@aasdsd.com",
                role: "Manager",
                uniqueData: 1
            },
            {
                name: "John",
                id: 3,
                email: "asdasdasd@aasdsd.com",
                role: "Manager",
                uniqueData: 1
            },
            {
                name: "John",
                id: 4,
                email: "asdasdasd@aasdsd.com",
                role: "Manager",
                uniqueData: 1
            },
            {
                name: "John",
                id: 5,
                email: "asdasdasd@aasdsd.com",
                role: "Manager",
                uniqueData: 1
            }]
            const expected = `<!DOCTYPE html>
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
                    <section class="rounded-lg max-w-xs mt-5 ml-5 shadow-md">
                <div class="bg-blue-800 text-blue-300 rounded-t-lg pl-2">
                    <h2 class="text-3xl pb-2">John<h2>
                    <p class="text-2xl pb-2">Manager &#128188;</p>
                </div>
                <div class="flex flex-col w-72 text-lg py-10 px-5">
                    <p class="font-bold">ID</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">1</span>
                    <p class="font-bold">Email</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">asdasdasd@aasdsd.com</span>
                    <p class="font-bold">Office Number</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">1</span>
                </div>
            </section>
            <section class="rounded-lg max-w-xs mt-5 ml-5 shadow-md">
                <div class="bg-blue-800 text-blue-300 rounded-t-lg pl-2">
                    <h2 class="text-3xl pb-2">John<h2>
                    <p class="text-2xl pb-2">Manager &#128188;</p>
                </div>
                <div class="flex flex-col w-72 text-lg py-10 px-5">
                    <p class="font-bold">ID</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">2</span>
                    <p class="font-bold">Email</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">asdasdasd@aasdsd.com</span>
                    <p class="font-bold">Office Number</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">1</span>
                </div>
            </section>
            <section class="rounded-lg max-w-xs mt-5 ml-5 shadow-md">
                <div class="bg-blue-800 text-blue-300 rounded-t-lg pl-2">
                    <h2 class="text-3xl pb-2">John<h2>
                    <p class="text-2xl pb-2">Manager &#128188;</p>
                </div>
                <div class="flex flex-col w-72 text-lg py-10 px-5">
                    <p class="font-bold">ID</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">3</span>
                    <p class="font-bold">Email</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">asdasdasd@aasdsd.com</span>
                    <p class="font-bold">Office Number</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">1</span>
                </div>
            </section>
            <section class="rounded-lg max-w-xs mt-5 ml-5 shadow-md">
                <div class="bg-blue-800 text-blue-300 rounded-t-lg pl-2">
                    <h2 class="text-3xl pb-2">John<h2>
                    <p class="text-2xl pb-2">Manager &#128188;</p>
                </div>
                <div class="flex flex-col w-72 text-lg py-10 px-5">
                    <p class="font-bold">ID</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">4</span>
                    <p class="font-bold">Email</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">asdasdasd@aasdsd.com</span>
                    <p class="font-bold">Office Number</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">1</span>
                </div>
            </section>
            <section class="rounded-lg max-w-xs mt-5 ml-5 shadow-md">
                <div class="bg-blue-800 text-blue-300 rounded-t-lg pl-2">
                    <h2 class="text-3xl pb-2">John<h2>
                    <p class="text-2xl pb-2">Manager &#128188;</p>
                </div>
                <div class="flex flex-col w-72 text-lg py-10 px-5">
                    <p class="font-bold">ID</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">5</span>
                    <p class="font-bold">Email</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">asdasdasd@aasdsd.com</span>
                    <p class="font-bold">Office Number</p>
                    <span class="shadow-md min-w-full text-center self-center mb-5">1</span>
                </div>
            </section>
        </main>
    </body>
</html>`
            const result = card.generateHTML(testArr);

            expect(result).toEqual(expected);
        })
    });
});
