// First Duplicate Value
//O(n^2) Time | O(1) Space - where n is the length of the input array

function firstDuplicateValue(array) {
    let minimumSecondIndex = array.length;
    for (let i = 0; i < array.length - 1; i++) {
        const value = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const valueToCompare = array[j];
            if (value === valueToCompare) {
                minimumSecondIndex = Math.min(minimumSecondIndex, j);
            }
        }
    }
    if (minimumSecondIndex === array.length) return -1;
    return array[minimumSecondIndex];
}

