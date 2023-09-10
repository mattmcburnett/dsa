const string = 'matt_is_the_best_candidate'


//new string
// iterate through string and concat string[i] with the newString
// return the new string

const abc = 'abc'

//should do with an array for better time complexity;

const reverseString = (string) => {

    let newString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        const letter = string[i];
        newString = newString + letter;
    };

    return newString;

}
console.log(reverseString(string))
