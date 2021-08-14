

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            this.email = email;
        }else{
            this.email = "Invalid email";
        }
    }   
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;