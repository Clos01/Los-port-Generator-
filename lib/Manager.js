//  Define manager class and will be inherit from Employee 
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id, email);
        this.officeNumber = officeNumber;
        this.title ="Manager";

    }
}
module.exports =Manager;