const animation= [
    {transform: 'rotate(0) scale(1)'},
    { transform: 'rotate(360deg) scale(0)' }
];
const animationConfig= {
    duration: 2000,
    iterations: 1
    
};
const image1 = document.getElementById("img-1");
const image2 = document.getElementById("img-2");
const image3 = document.getElementById("img-3");



async function imageAnimation(){
    image1.animate(animation,animationConfig)
    await image1.animate(animation,animationConfig).finished
    image2.animate(animation,animationConfig)
    await image2.animate(animation,animationConfig).finished
    image3.animate(animation,animationConfig)
}
imageAnimation();