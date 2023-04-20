let word = 'house';

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

console.log(word.capitalize());



let wordToBeReversed = 'Informatics';

String.prototype.reverse = function () {
    let rev = ""
    for (let i = this.length-1; i > -1; i--) {
        rev+=this[i];
    }
    return rev;
};

console.log(wordToBeReversed.reverse());

let wordAgain = "sequoia";

String.prototype.capVowels = function () {
    const vowels = ['a','e','i','o','u'];
    let result = ""
    for (let i = 0; i<this.length;i++){
        if(vowels.includes(this[i].toLowerCase())){
            result+=this[i].toUpperCase();
        } else {
            result+=this[i];
        }
    }
    return result;
};

console.log(wordAgain.capVowels());