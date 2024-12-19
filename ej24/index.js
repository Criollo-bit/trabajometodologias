//Declara el array nums=[9,4,2,8]. Verifica si la suma de todos
//  los elementos del array es mayor que 20. Muestra en un alert "Sí" o "No".

const nums = [9, 4, 2, 8];
let sumar = 0;
for (let i = 0; i < nums.length; i++) {
  sumar += nums[i];
}
alert(sumar > 20);