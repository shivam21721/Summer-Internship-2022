const triangleArea = (a, b, c) => {
    const semiPerimeter = (a + b + c) / 2;
    const area =  Math.sqrt(
        semiPerimeter*
        (semiPerimeter - a)*
        (semiPerimeter - b)*
        (semiPerimeter - c)
        );
    return area;
};

console.log(triangleArea(5, 6, 7).toFixed(2));