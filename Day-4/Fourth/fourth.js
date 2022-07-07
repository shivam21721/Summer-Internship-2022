const getDifference = (num) => {
    const diff = Math.abs(num - 13);
    return num > 13 ? (2 * diff) : diff;
};

console.log(getDifference(21));
console.log(getDifference(7));