// program to extract value as an array from an array of objects

const array1 = [1, 3, 5, 8];
const array2 = [11, 3, 5, 2];

function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

if (areArraysEqual(array1, array2)) {
    console.log("The arrays are identical.");
} else {
    console.log("The arrays are different.");
}

