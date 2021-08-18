class Card {
    constructor(teamMember){
        const { name, id, email, role, uniqueData } = teamMember;
        Object.assign(this, { name, id, email, role, uniqueData });

        this.cardContainerClass = "rounded-lg max-w-xs mt-5 ml-5 shadow-md";
        this.titleClass = "text-2xl pb-2";
        this.cardHeaderClass = "bg-blue-800 text-blue-300 rounded-t-lg pl-2";
        this.nameClass = "text-3xl pb-2";
        this.spanClass = "shadow-md min-w-full text-center self-center mb-5";
        this.lowerDivClass = "flex flex-col w-72 text-lg py-10 px-5";
        this.lowerPClass = "font-bold"
        this.roleObj = this._getRoleObject();
    }

    
    _getRoleObject(){
        
        switch(this.role) {
            case "Manager":
                this.icon = "&#128188;";
                this.uniqueTitle = "Office Number";
                break;
            case "Engineer":
                this.icon = "&#128187;";
                this.uniqueTitle = "Github";
                this.uniqueData = `<a href="https://github.com/${this.uniqueData}" target="blank">${this.uniqueData}</a>`
                break;
            case "Intern":
                this.icon = "&#127891;";
                this.uniqueTitle = "School";
                break; 
            default:
                this.icon = "&#128084;";
                this.uniqueTitle = "Job";
        }
        this.titleContent = `${this.role} ${this.icon}`;
        }
    
    getCardHTML(){
        
        return `            <section class="${this.cardContainerClass}">
                <div class="${this.cardHeaderClass}">
                    <h2 class="${this.nameClass}">${this.name}<h2>
                    <p class="${this.titleClass}">${this.titleContent}</p>
                </div>
                <div class="${this.lowerDivClass}">
                    <p class="${this.lowerPClass}">ID</p>
                    <span class="${this.spanClass}">${this.id}</span>
                    <p class="${this.lowerPClass}">Email</p>
                    <span class="${this.spanClass}"><a href="mailto:${this.email}">${this.email}</a></span>
                    <p class="${this.lowerPClass}">${this.uniqueTitle}</p>
                    <span class="${this.spanClass}">${this.uniqueData}</span>
                </div>
            </section>`
    }
        
}

module.exports = Card;