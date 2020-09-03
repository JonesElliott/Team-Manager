// TODO: Write code to define and export the Employee class

// Employee Class
class Employee {
    // constructor containing arguments for the Employee class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
}



module.exports = Employee;