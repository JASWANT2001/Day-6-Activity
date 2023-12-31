// Day 06 :OOPS TASK 

// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie {
    constructor(title,studio,rating){
        this.title = title
        this.studio = studio
        this.rating = rating
    }
}
var list = new movie("Leo","7Screen","PG-14")
console.log(list)


// *................................................................................................*


// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movie {
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
var list = new movie("Leo","7Screen");
list1 = new movie ("Leo","7Screen","PG-14");
console.log(list,list1);


// *................................................................................................*


// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }


static getPG(input){

    var n = input.filter(movie  => movie.rating === "PG");
    return n;
}
}

var list = new movie("Leo","7Screen","PG");
list1 = new movie ("Thunivu","Zee studios","PG-14");
list2 = new movie ("Varisu","Venkateswara creations","PG");
list3 = new movie ("Vikram","RAj Kamal Films","PG-14");
list4 = new movie ("veeram","vijaya productions","PG");


var tlist = [list,list1,list2,list3,list4]
var pgmovies = movie.getPG(tlist)
console.log(pgmovies);


// *................................................................................................*


// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}


var a = new movie("Casino Royale", "Eon Productions", "PG-13")
console.log(a);


// *................................................................................................*


// 2. Convert the UML diagram to Typescript class. - use number for double


class Circle {
        constructor(radius = 1.0, color = "red") {
          this._radius = radius;
          this._color = color;
        }
      
        get radius() {
          return this._radius;
        }
      
        set radius(radius) {
          this._radius = radius;
        }
      
        get color() {
          return this._color;
        }
      
        set color(color) {
          this._color = color;
        }
      
        toString() {
          return `Circle [radius = ${this._radius} , color = ${this._color}]`;
        }
      
        getArea() {
          return Math.PI * Math.pow(this._radius, 2);
        }
      
        getCircumference() {
          return 2 * Math.PI * this._radius;
        }
      }
      
      const circle1 = new Circle(2, "green");
      const circle2 = new Circle(5, "Yellow");
      
      console.log(circle1.toString());
      console.log("Area:", circle1.getArea());
      console.log("Circumference:", circle1.getCircumference());
      
      console.log(circle2.toString());
      console.log("Area:", circle2.getArea());
      console.log("Circumference:", circle2.getCircumference());


// *................................................................................................*


// 3. Write a “person” class to hold all the details.

class Person {
        constructor(firstName, lastName, age, department, email, mobile, city){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.department=department;
            this.email=email;
            this.mobile=mobile;
            this.city = city;
        }
        getPersonDetails(){
            return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            department: ${this.department}
            email: ${this.email}
            mobile: ${this.mobile}
            city: ${this.city}`;
        }
    }
    let person1 = new Person("jash", "k",24, "mechanical", "jash@gmail.com", 9150485661, "coimbatore");
    let person2 = new Person("parama","sivan", 27, "mechanical", "paramasivan@gmail.com", 7639782192, "chennai");
    
    console.log(person1.getPersonDetails());
    console.log(person2.getPersonDetails());


// *................................................................................................*


// 4. write a class to calculate the uber price.

class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    totalPrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  const myUber = new UberPrice(5, 10, 60, 14, 2);
  console.log(myUber.totalPrice());

// *................................................................................................*

