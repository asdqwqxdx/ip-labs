function findMax(a, b) {
    return a > b ? a : b;
}
console.log("Завдання 1 (максимум між 10 та 25):", findMax(10, 25));

const subtract = function (a, b) {
    return a - b;
};
console.log("Завдання 2 (віднімання 20 - 7):", subtract(20, 7));

const sqrt = (n) => Math.sqrt(n);
console.log("Завдання 3 (корінь з 16):", sqrt(16));

function geometricProgression(n, a, r) {
    if (n === 1) return a;
    return a * Math.pow(r, n - 1) + geometricProgression(n - 1, a, r);
}
console.log("Завдання 4 (геом. прогресія n=3, a=2, r=3):", geometricProgression(3, 2, 3));

function createDivider(divisor) {
    return function (number) {
        return number / divisor;
    };
}
const half = createDivider(2);
console.log("Завдання 5 (ділення на 2 числа 50):", half(50));

function processSet(set, callback) {
    set.forEach(item => callback(item));
}
const mySet = new Set(["apple", "banana"]);
processSet(mySet, (item) => console.log("Завдання 6 (елемент Set):", item));