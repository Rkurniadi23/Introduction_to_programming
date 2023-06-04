// Level 1
function greet(name){
    return `Good day, ${name}!`
}
console.log (greet("Anakin"))


// Level 2
function greet(name){
    if (time < 12) {
        return `Good morning, ${name}!`
      } else if (time < 18) {
        return `Good afternoon, ${name}!`
      } else {
        return `Good evening, ${name}!`
      }
}
var today = new Date()
var time = today.getHours()
console.log (greet("Anakin"))


// Level 3
function greet(friend,enemy){
    if (time < 12) {
        return `Good morning, ${friend}!` && `I'm coming for you, ${enemy}!`
      } else if (time < 18) {
        return `Good afternoon, ${friend}!`&& `I'm coming for you, ${enemy}!`
      } else {
        return `Good evening, ${friend}!`&& `I'm coming for you, ${enemy}!`
      }
}
var today = new Date()
var time = today.getHours()
console.log (greet("Anakin","Count Dooku"))