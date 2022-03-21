// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.
describe("codedMessage", function(){
    it("takes in a string and returns a coded message", function(){
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})



// b) Create the function that makes the test pass.

// create a function name codedmessage that takes in a string
// make an array theat stores that coded letters
// make a conditional statement inside a loop where a string will be added if the word includes a letter of the coded message to the new variable of string
// return the coded message

function codedMessage(string) {
    let arr = ["4", "3", "1", "0"]
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i).toLowerCase() === "a") {
            newString += arr[0]
        } else if (string.charAt(i).toLowerCase() === "e") {
            newString += arr[1]
        } else if (string.charAt(i).toLowerCase() === "i") {
            newString += arr[2]
        } else if (string.charAt(i).toLowerCase() === "o") {
            newString += arr[3]
        } else {
            newString += string[i]
        }
    }
    return newString
}


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("arrayContains", function(){
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", function(){
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(arrayContains(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(arrayContains(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

// make a function that have two parameters
// use a filter method to filter out words that includes the character given
// also use the lowercase method so that every letter will be equal to the given arguments
// return the filtered words
function arrayContains(arr, char) {
    return arr.filter(a => {
        return a.toLowerCase().includes(char)
    })
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", function(){
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", function(){
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        
    })
})

// b) Create the function that makes the test pass.

//create a function name full house that takes in an array
// make a variable name noDuplicate that revmove duplicate from the array
// use the map method with a conditional statement where you add 1 to first variable if array is equals to first index and add 1 to second variable if array is equals to seconde index
// make a new conditional statement that if the first var is equals three and second var is equals two or if first var is equals two and second var is equals three, then it is a fullhouse
// return true if full house and false if not
function fullHouse(arr) {
    let noDup = [...new Set(arr)]
    let first = 0
    let second = 0
    arr.map(a => {
        if (a === noDup[0]) {
            first++
        } if (a === noDup[1]) {
            second++
        }
    })
    if (first === 3 && second === 2){
        return true
    } else if (first === 2 && second === 3) {
        return true
    } else {
        return false
    }
}