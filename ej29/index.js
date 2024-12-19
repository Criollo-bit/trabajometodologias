//En el array nums = [6,13, 1, 15, 5 ] usando un for y un 
// if muestra los elementos que estén en índices impares

const nums = [6, 13, 1, 15, 5];
for (let i = 1; i < nums.length; i += 2) {
    console.log(nums[i]);
}