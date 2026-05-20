console.log("train ishga tushdi");

function countVowels(str){
    const vovels = "aeuio"
    count = 0;
    for(let letter of str){
        if(vovels.includes(letter)){
            count++;
        }
    }
    return count;
}

const a = countVowels("hello");
console.log(a)




// function findLongestWord(str){
//     const strarray = str.split(" ")
//     console.log(strarray)
//     let longest = strarray[0]
//     for(let i = 1; i < strarray.length; i++){
//         if(longest.length < strarray[i].length){
//             longest = strarray[i];
//         }
//     }
//     console.log(longest)
//     return longest;
// }

// findLongestWord("I came from Uzbekistan! 111111111111111111111")
// console.log("-----------------------")
// findLongestWord("Python programming language ddddddddddddddddddddd")



// function majorityElement(arr) {
//     let maxElement = 0;
//     let result = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }
//         if (count > maxElement) {
//             maxElement = count;
//             result = arr[i];
//         }
//     }

//     return result;
// }

// const arr1 = [1, 2, 4, 3, 5, 4, 3, 4, 3, 3, 4]
// console.log(majorityElement(arr1)); 






// function getPositive(arr) {
//    let result = arr.filter((ele) => {
//    return ele > 0
// }).join(" ")
//    return result;
// }

// arr1 = [-2, 3, 8, -9, 7, 6]
// console.log(getPositive(arr1))



// function getHighestIndex(arr){
   
//    let max = arr[0];
   
//    for(let i = 1; i < arr.length; i++){
//       if(max < arr[i]){
//          max = arr[i]
//       }
//    }

//    console.log(`Max value is ${max}`)
//    return arr.indexOf(max)
//    //return max
// }

// const x = [5, 1521, 9312, 21, 8999, 90, 2233]
// const result = getHighestIndex(x)
// console.log(result);




// MITASK F
// function findDoublers(word) {
   
//    const wordL = word.toLowerCase();

//    for(let i = 0; i < wordL.length; i++){
//       for(let j = i + 1; j < wordL.length; j++){
//          if(wordL[i] === wordL[j]){
//             return true;
//          }
//       }
//    }
   
//    return false;
// }

// console.log(findDoublers("MIT"));
// console.log(findDoublers("Hello"));
// console.log(findDoublers("Nodemon"));
// console.log(findDoublers("qwerty"));








// function getReverse(word) {
   
//    const reversed = word.toLowerCase().split("").reverse().join("");
   
//    console.log(reversed)
//    return reversed;
// }


// getReverse("hello");

















// function compareWords(st1, st2) {
     
//    if(st1.length !== st2.length){
//         return false;
//     }
   
//    const word1 = st1.toLowerCase().split("").sort().join("");
//    const word2 = st2.toLowerCase().split("").sort().join("");
   
//    return word1 === word2
   
// }


// console.log(compareWords("mitgroup", "gmtiprou"));
// console.log(compareWords("bmw", "wbm"));      
// console.log(compareWords("fast", "stffa"));
// console.log(compareWords("hello", "world")); 































// // Task C

// const moment = require("moment");

// class Shop{
//     #non;
//     #lagmon;
//     #cola;

//     constructor(non, lagmon, cola){
//         this.#non = non;
//         this.#lagmon = lagmon;
//         this.#cola = cola;
//     }

//     time(){
//         return moment().format("HH:mm:ss");
//     }

//     qoldiq(){
//         console.log(`Hozir ${this.time()}'da ${this.#non}ta non, ${this.#lagmon}ta lag'mon va ${this.#cola}ta cola mavjud`);
//     }

//     sotish(name, number){
//     if(name === "non"){
//         this.#non -= number;
//     }else if(name === "lagmon"){
//         this.#lagmon -= number;
//     }else if(name === "cola"){
//         this.#cola -= number;
//     }else return console.log("Bunaqa mahsulot hozircha sotilmaydi!")
    
//     console.log(`${name} ${number} dona sotildi`);
    
// }

//     qabul(name, number){
//     if(name === "non"){
//         this.#non += number;
//     }else if(name === "lagmon"){
//         this.#lagmon += number;
//     }else if(name === "cola"){
//         this.#cola += number;
//     }else return console.log("Bu mahsulot Qabul qilinmaydi!")
    

//     console.log(`${name} ${number} dona qabul qilindi`);
//     };
// }


// const s1 = new Shop(4, 8, 9)

// s1.qoldiq();
// s1.sotish("non", 3);
// s1.qoldiq();
// s1.sotish("pepsi", 5);
// s1.sotish("cola", 5);
// s1.qabul("non", 25);
// s1.qoldiq();































//TASK B

// function countDigits(a) {
//     let count = 0;

//     for(let i = 0; i < a.length; i++){
//         if(a[i] >= "0" && a[i] <= "9"){
//             count++;
//         }
//     }

//     return count;
// }

// const result = countDigits("ad2a54y79w6768eedr3frg4et0sfgb9")
// console.log("result is: ", result);




// //----------------> Asynchronous functions in Js <----------------------------

// console.log("Jack Ma maslahatlari");

// const list = [
//     "Yahshi talaba buling", // 0-20 yoshgacha
//     "tugri boshliq tanlang va kuproq hato qiling",// 20-30 yoshgacha
//     "uzingizga ishlashingizni boshlang",//30-40 yoshgacha
//     "siz kuchli bulgan narsalarni qiling",// 40-50 yoshgacha
//     "yoshlarga investitsiya qiling",// 50-60 yoshgacha
//     "endi dam oling, foidasi yuq endi",// 60 dan kup
// ];

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => { //Promise bilan setTimeoutlar ishlaydi keginchalik tulliq urganib chiqamiz
//             setInterval(() => {
//                 resolve(list[5]); //resolve called only one time 
//             }, 2000);
//         });
//     }
// }


// console.log("passad here 0");

// maslahatBering(25).then(data =>{ //koproq shuni ishlatgan yahshi ekan
// console.log("Javob: ", data);
// }).catch( err =>{
// console.log("ERROR", err);
// });

// console.log("passad here 1");
//asinc and await

// async function run() {
//     let javob = await maslahatBering(79); // await -- kutib tur kerakli malumot kelmagincha ishlama 
//     console.log(javob);
//     // javob = await maslahatBering(31);
//     // console.log(javob);
//     // javob = await maslahatBering(41);
//     // console.log(javob);
// }

// run();



 //---------------> callback functions <---------------

// function maslahatBering(a, callback){
//     if (typeof a !== "number") callback("insert a number", null); //numberdan boshqa narsa kiritilsa 
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else{
//        setInterval(function (){
//          callback(null, list[5]);
//        }, 3000);
//     }
// }

// console.log("passad here 0");

// maslahatBering(70, (err, data)=>{
//     if (err) console.log("ERROR", err);
//     else{
//         console.log("javob: ", data)
//     }
// });

// console.log("passad here 1");

//==============================================================
// //MITASK A
// function numOfLetters(a, b) {
//     let count = 0;
//     a = a.toLowerCase();
//     b = b.toLowerCase();
//     for (let i = 0; i < b.length; i++) {
//         if (a === b[i]) {
//             count++;
//         }
//     }
//     return count;
// }

// const result1 = numOfLetters("e", "Telegram");
// const result2 = numOfLetters("o", "zoom");
// const result3= numOfLetters("e", "engineer");
// console.log("result is: ", result1);
// console.log("result is: ", result2);
// console.log("result is: ", result3);
