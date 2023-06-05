// Feature 1
var numberOfPieces = 12
var numberOfPeople = 5
function howMuchLeftOverCake(){
    return numberOfPieces / numberOfPeople
}

console.log (howMuchLeftOverCake())

// Feature 2
var numberOfPieces = 24
var numberOfPeople = 7
function howMuchLeftOverCake(){
    if (numberOfPieces % numberOfPeople === 0){
        return "Noleftovers for you!"
    }
    if (numberOfPieces % numberOfPeople >= 2 && numberOfPieces % numberOfPeople < 3){
        return "You have some leftovers"
    }
    if (numberOfPieces % numberOfPeople >= 3 && numberOfPieces % numberOfPeople <=5){
        return "You have leftovers to share"
    }
    if (numberOfPieces % numberOfPeople > 5){
        return "Hold another party!"
    }
}

console.log (howMuchLeftOverCake())