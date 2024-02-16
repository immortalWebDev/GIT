class Student {
    constructor(name, age, marks) 
    {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    setPlacementAge(minPlacementAge) {
      
       //return a function which takes in argument -> minMarks
       //returns true if students marks are gretaer than minMarks and age gretaer than minPlacementAge
       //Complete this function only. Do not alter any other thing.
       
        return (minMarks) => {
            return this.marks >= minMarks && this.age >= minPlacementAge;
        };
    }
}

function createNewStudents(name, age, marks) {
  
    const Riya = new Student(name, age, marks);
    const isEligible = Riya.setPlacementAge(18)(40);
    console.log(isEligible);
}

// Example usage:
createNewStudents('Riya', 18, 41); 

