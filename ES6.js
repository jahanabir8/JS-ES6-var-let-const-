// var and let is almost same

var a = 10;
console.log('I am a: ' + a)

a = 20
console.log('I am a: ' + a)
// we can change the value of a and it will work 


let b = 10;
console.log('I am b: ' + b)

b = 20
console.log('I am b: ' + b)
//in 'let' we also can change the value of a and it will work 


const c = 10
console.log('I am c: ' + c)
// c = 20
// console.log('I am c: ' + c)
//  the last console will not work . beacause in 'const' we already defained a value of c . it will not allow
// anohter value of c


// function es5var(){
//     if(true) {
//         var d = 5
//     }
//     console.log('Value of d in var: ' + d)
// }
// es5var()
// we can access the value of  d outsite of  if block . because var work in FUNCTION SCOPE

// on the other hand. lets apply it on 'let' and 'const'
// function es5let(){
//     if(true){
//         let e = 10
//     }
//     console.log('Value of e in let: ' + e)
// }
// es5let()

// function es5const(){
//     if(true){
//         const f = 20
//     }
//     console.log('Value of f in const is: ' + f)
// }
// es5const()
// look it showing error. because 'const' and 'let' work in BLOCK SCOPE

// কারন কি? হ্যাঁ কারন হচ্ছে let বা const হচ্ছে ব্লক স্কোপে কাজ করে।
// এখানে if এর ভিতরে ডিক্লেয়ার করা ভ্যারিয়েবল a if ব্লকের ভিতরের স্কোপই পাবে একমাত্র,
// এর বাইরে এটা অ্যাক্সেস করা যাবেনা, যদিও একই ফাংশনের ভিতরে।


// এখন আরো পার্থক্য হোইস্টিং এর মধ্যে, var দিয়ে কোনো ভ্যারিয়েবল ডিক্লেয়ার করার আগে ইউজ করা হলে
//  সেটা undefined দেখায় হোইস্টিং এর কারনেঃ


// কিন্তু let বা const দিয়ে ভ্যারিয়েবল ডিক্লেয়ার করলে, বা ডিক্লেয়ার করার আগে সেই ভ্যারিয়েবল
//  অ্যাক্সেস করতে চাইলে এরর আসবেঃ


// এখানে এদেরকেও হোইস্টিং এর সিস্টেমে হোইস্টেড করা হয়। কিন্তু ‘Temporal Dead Zone’ এর কারনে
//  আমরা চাইলেও এদেরকে ডিক্লেয়ার করার আগে অ্যাক্সেস করতে পারি না। একটা ভ্যারিয়েবল ডিক্লেয়ার
//   করা হলে সেটাকে অ্যাক্সেস করা যায়, এখন ভ্যারিয়েবল ডিক্লেয়ারেশন আর সেটার স্কোপ পাওয়ার মধ্য
//   ে একটা সময় আছে, ঐ সময়টাকেই ‘Temporal Dead Zone’ বলে।

// lets see another example 
var i=13
for (var i=0; i<5; i++){
    console.log(i)
}
console.log('Value of "i" using var: ' +i)

let j= 13
for(let j=0; j<5; j++){
    console.log(j)
}
console.log('Value of "i" using let: ' +j)

const k = 13
for(const k=0; k<5; k++){
    console.log(k)
}
console.log('Value of "k" using  const: ' +k)
// it will show error in when we will use const . here we already decleared k . so it is not possible
// to declear again k 