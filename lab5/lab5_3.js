let firstArrayString = prompt('First array separated by space:');
let firstArray = firstArrayString.split(' ');
console.log(`First array: ${firstArray}`);

let secondArrayString = prompt('Second array separated by space:');
let secondArray = secondArrayString.split(' ');
console.log(`Second array: ${secondArray}`);

let maxLength = Number(prompt('Max length for the new array:'));

if ((maxLength == Number.NaN))
    console.log('maxLength not a number');
else
    console.log(makeArray(firstArray, secondArray, maxLength));

function makeArray(firstArray, secondArray, maxLength) {
    let newArray = firstArray.concat(secondArray);

    if(newArray.length > maxLength)
        newArray = newArray.slice(0, maxLength);
    
    return `New array: ${newArray}`;
}