class Card {
    constructor(teamMember){
       const { name, id, email, role } = teamMember;
       Object.assign(this, { name, id, email, role });

    }

    
    _createSpecificData(){
        // switch case depending on role
        }
    
}