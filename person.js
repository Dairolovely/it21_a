class person{

    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    getName(){
        console.log(this.name);

    }

    displayInfo(){
        console.log("name: " + this.name);
         console.log("age: " + this.age);
          console.log("occupation: " + this.occupation);
          console.log("-----------");

    }
}

const person1 = new person("Coco martin", 24, "Masahista");


person1.getName();
person1.displayInfo();

