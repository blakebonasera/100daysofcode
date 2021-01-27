// LongestBalancedSubstring O(n^3) | time O(n) space

fucntion longestBalancedSubstring(string){
    let maxLength = 0;
    for (let i = 0; i < string.length; i++){
        for (let j = i + 2; j < string.length + 1; j+=2){
            if (isBalanced(string.slice(i,j))){
                const currentLength = j - i;
                maxLength = Math.max(maxLength, currentLength);
            }
        }
    }
    return maxLength;
}

function isBalanced(string) {
    const openParensStack = [];
    for (const char of string) {
        if (char === '('){
            openParensStack.push('(');
        } else if (openParensStack.length > 0){
            openParensStack.pop();
        } else {
            return false;
        }
    }
    return openParensStack.length === 0;
}