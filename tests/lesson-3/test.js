
let numbers4 = [1, 2, 4, 5, 6, 7, 8, 9, 11, 13, 15];
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n-1; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
for (let j = 0; j< numbers4.length; j++) {
    if (isPrime(numbers4[j])) {
        console.log((numbers4[j]), "là số nguyên tố");

}
}