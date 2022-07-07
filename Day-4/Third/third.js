const celToFahr = (T) => {
   const f = ((T * 9) / 5)  + 32;
   return f;
};

const fahrToCel = (T) => {
    const cel = ((T - 32) *5) / 9;
    return cel;
};

console.log(celToFahr(60));
console.log(fahrToCel(45));