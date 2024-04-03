// Phân biệt “==” và “===”
// "=="là phân biệt về giá trị 
// "===" là phân biệt kiểu dữ liệu
// let a = 5;
// let b= '5';
// console.log(a==b); //true
// console.log(a===b);//false
// console.log(a!=b);  //false
// console.log(a!==b);//true


// console.log(0 || NaN ||"Rikkei Academy"||null); //Rikkei Academy
// console.log(null || NaN || false || null);//null
// console.log(undefined || 1 || 5 || null);//1
// console.log("" || null || 5 || NaN);//5
// console.log(1 || null || 12|| NaN);//1

console.log(0 && 1 && "Rikkei Academy" &&null);//0
console.log(2 && NaN && false && null);//NaN
console.log(3 && 1 && 5 && null);//null
console.log("1" && undefined && 5 && NaN);//undefined
console.log(1 && null && 12&& NaN);//null

let a=6;
// let result= ++a + a + a++ + ++a + a;
console.log(++a);//a=7
console.log(a);//a==7
console.log(a++);//a=8
console.log(++a);//a=9
console.log(a);//a=9
console.log(result);//tông39

// Phân biệt a++ và ++a.
// a++:là in trước cộng sau
// ++a:là cộng trước in sau