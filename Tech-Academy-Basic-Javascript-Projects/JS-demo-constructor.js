class person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName(){
        return this.firstName+" "+this.lastName;
    }
}
var me= new person('Matt','Kunnari');
console.log(me.getName());