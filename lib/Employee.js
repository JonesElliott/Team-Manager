// TODO: Write code to define and export the Employee class

// Employee Class
class Employee {
    // constructor containing arguments for the Employee class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    // methods for the Employee class
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}



module.exports = Employee;