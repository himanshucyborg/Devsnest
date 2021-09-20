//1st question
var student = {
    name: "David Rayy", sclass : "VI", rollno : 12
}
    console.log(student.name); console.log(student.sclass); console.log(student.rollno);

var count = 0;
for (var prop in student){
    count++;
}
console.log(count);

//2nd question
var student = {
    name: "David Rayy", sclass : "VI", rollno : 12
}
console.log(student);
delete student.rollno;
console.log(student);

//3rd question
var student = {
    name: "David Rayy", sclass : "VI", rollno : 12
}

var cnt = 0;
for (var prop in student) {
    cnt++;
}
console.log(cnt)

//4th question
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

function displayInformation() {
    console.log(library.reduce( (output, book) => output +=
      `${book.readingStatus ? 'Already read' : 'You still need to read'} ${book.title} by ${book.author}.\n`, ''
    ));
  }
  
  displayInformation();

//5th question
function myFunction(object) { 
    var volume=(22/7)*object.radius**2*object.height;
    console.log(volume.toFixed(5));
  }

  myFunction({radius:12,height:10})

//6th question
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

function compare (obj1, obj2) {
    return obj1["libraryID"] - obj2["libraryID"];
};

console.log(library.sort(compare));