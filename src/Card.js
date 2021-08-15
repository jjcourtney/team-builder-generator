class Card {
    constructor(teamMember){
        const { name, id, email, role, uniqueData } = teamMember;
        Object.assign(this, { name, id, email, role, uniqueData });
       
        this.titleClass = "";
        this.cardHeaderClass = "";
        this.nameClass = "";
        this.spanClass = "";
        this.roleObj = this._getRoleObject();
    }

    
    _getRoleObject(){
        
        switch(this.role) {
            case "Manager":
                this.icon = "&#128188;"
                this.uniqueSpan = `Office Number: ${this.uniqueData}`
                break;
            case "Engineer":
                this.icon = "&#128187;"
                this.uniqueSpan = `Github: ${this.uniqueData}`
                break;
            case "Intern":
                this.icon = "&#127891;"
                this.uniqueSpan = `School: ${this.uniqueData}`
                break; 
            default:
                this.icon = "&#128084;"
                this.uniqueSpan = `Employee`
        }
        this.titleContent = `${this.role} ${this.icon}`;
        }
    
    getCardHTML(){
        
        return `<section>
    <div class="${this.cardHeaderClass}">
        <h2 class="${this.nameClass}">${this.name}<h2>
        <p class="${this.titleClass}">${this.titleContent}</p>
    </div>
    <div>
        <span class="${this.spanClass}">ID: ${this.id}</span>
        <span class="${this.spanClass}">Email: ${this.email}</span>
        <span class="${this.spanClass}">${this.uniqueSpan}</span>
    </div>
</section>`
    }
        
}
const testObj = { 
    name : "John",
    id : 1 , 
    email : "asd@asd.com",
    role : "Manager",
    uniqueData : 1 }

const testCard = new Card(testObj)

console.log(testCard.getCardHTML())
module.exports = Card;