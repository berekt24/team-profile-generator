class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // super gets info from parent constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;