let array1 = getArray('Enter the first array (separated by space):');
let array2 = getArray('Enter the second array (separated by space):');

console.log(`First array: ${array1}`);
console.log(`Second array: ${array2}`);

let smallestCommon = findSmallestCommonElement(array1, array2);
if (smallestCommon !== null) {
    console.log(`Smallest common element: ${smallestCommon}`);
} else {
    console.log('No common elements found.');
}

console.log(`Sorted array: ${bubbleSort(array1)}`);

function getArray(promptMessage) {
    let arrayString = prompt(promptMessage);
    return arrayString.split(' ').map(Number);
}


function findSmallestCommonElement(array1, array2) {
    let commonElements = array1.filter(el => array2.includes(el));
    if (commonElements.length > 0) {
        return Math.min(...commonElements);
    } else {
        return null; 
    }
}


function bubbleSort(array) {
    let sortedArray = [...array]; 
    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
            }
        }
    }
    return sortedArray;
}