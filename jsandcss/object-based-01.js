person = {species: "animal"}

student.prototype = person;
s1 = new student()
var s2 = new student()

console.log(s1.species)
console.log(s1.species)

function student(){

}
s2.species = "Dog"
console.log(s2.species)

function outputsomething(){
  var s1 = {species:"something"}
  console.log("in a function: " + s1.species);
}
outputsomething()
console.log(s1.species)
