//Activity 1:Class Definition
//Task 1:Define a class Person with Properties name and age and a method to return a greeting message .Create an instance of class and log the getting message 
//Task 2:Add a method to a Person class that update the age property and log the updated age;
class Person{
    constructor(name,lName,age){
        this.name=name;
        this.lName=lName;
        this.age=age;
    }

    sayHI(){
        return `Hi ${this.name} in class`
    }

    updateAge(){  //Task 2:
        this.age= 25;
        return `The updated age of the ${this.name} is ${this.age}`
    }

    static hiPerson(){   //Task 5:
        return ` hi using static keyword and the name is ${this.name} and age is ${this.age}`
    }

    
    get fullName(){  //Task 7:
        return `${this.name} ${this.lName}`
    }

    set fullName(name)      //Task 8:
    {
        const [fName,lName]=name.split(' ')
        this.name=this.name.toUpperCase()
        this.lName=this.lName.toUpperCase()

    }


}

const Hax =new Person("Hawx",18);
console.log(Hax);

console.log(Hax.sayHI());

console.log(Hax.updateAge()); //Task 2: 

//Activity 2:Class inheritance
//Task 3:Define a class student and extends the person class.Add a property StudentId and a method to return the Student ID.Create an instance of Student class and log the Student Id.
// Task 4: Override the getting method in the student class to increase the StudentID in the message.Log the override getting message.

class Student extends Person{

    static totalStudent=0;

    constructor(name,age,studentId)
    {
        super(name,age);
        this.studentId=studentId;
        Student.totalStudent++;
        console.log(`Total number of students : ${Student.totalStudent}`); //Task 6:
        
        
    }

rtStudentId(){
    return `The Student ID is ${this.studentId}`
}

sayHI(){
    return ` Hi for ${this.name} and age is ${this.age} and student id is ${this.studentId}`
}
}

const obj1=new Student("obj1",20,21010);
console.log(obj1);
console.log(obj1.rtStudentId());
console.log(obj1.sayHI()); //Task 4:


//Activity 3:Static Methods and Properties
//Task 5:Add a Static method to the person class that returns a generic greeting message Call this static method without create the instance of class.
console.log(Person.hiPerson());


//Task 6:Add a static property to Student class keep track the no. of students created. Increment this property in constructor and log the total number of students.

const obj2 =new Student("obj2",19,21022); 

//Activity 4:Getters and Setters
//Task 7:Add a getter method to person class to return the full name(assume firstName and lastName property).Create an instance and log the full name using getter .
//Task 8:Add a Setter method to the person class to update the name properties(firstName and LastName). Update the names using setter and lof the updated full name
const Obj3= new Person('task','seven 7',14);

// Obj3.fullName="hello taskseven"
console.log(Obj3.fullName);


//Activity 5: Private Fields
//Task 9:Define a class Account with private field for balance and a method to deposit and Withdraw money.ensure that the balance ca only b updated throw these methods
class Account {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.#balance}`);
    }
    
    withdraw(amount) {
        if (amount > this.#balance) {
        console.log("Insufficient funds");
        return;
        }
        this.#balance -= amount;
        console.log(`Withdrawn ${amount}. New balance is ${this.#balance}`);
    }
    }
    

      //Task 10:Create an instance of Account class and test the  deposit and withdraw methods .logging the balance after each operation
    const myAccount = new Account();
    myAccount.deposit(100);
    myAccount.withdraw(50);
    myAccount.withdraw(70);
    


