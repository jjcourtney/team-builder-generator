

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            this.email = email;
        }else{
            this.email = "Invalid email";
        }
        this.role = "Employee"
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
        return this.role;
    }
}

module.exports = Employee;