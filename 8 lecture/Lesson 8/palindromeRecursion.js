function isPalindrome (str, low, high) {
    // base case
    if (low >= high) {
        return true;
    }

    // return false if mismatch happens
    if (str.charAt(low) != str.charAt(high)) {
        return false;
    }

    // move to the next pair
    return isPalindrome(str, low + 1, high -1); // рекурсивна стъпка
}

console.log(isPalindrome("12321", 0, 4)); // ("racecar", 0, 6) 