//In JavaScript, if...else statements are used to execute different blocks of code based on a condition.


// Strict Equal To (===).

// Checks both value and data type.

console.log("If Else");
let marks = 75;

if (marks >= 90) {//Checks if marks is greater than or equal to 90,(75 ==90 or 75 > 90).
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//===================== positove || negative || zero number ==============================//

let number = -0;

if(number >0){
    console.log("Number is positive");
}
else if(number < 0){
        console.log("Number is negative");
}
else{
    console.log("Number is Zero");
}

//++++++++++++++++++++++++++++++ Even || Odd ++++++++++++++++++++++++++++++++++++++++++//

const num = 8;

if(num % 2 ==0){
console.log("Number is Even");
}
else{
    console.log("Number is odd");
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Marks \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//


let passMarks = 55;

if(passMarks >= 35){
    console.log("pass");
}
else{
    console.log("fail");
}


//((((((((((((((((((((((((((((((((((((((((( Voting )))))))))))))))))))))))))))))))//


const voting = 18;

if(voting >= 18){
 console.log("You are elegible");
}
else{
    console.log("You are under age");
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Greatest Of Two Number $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

const Comnum = 10;
const Secnum = -20;

if(Comnum > Secnum){
    console.log("Greater Number IS:",Comnum);
}
else{
    console.log("Not greater number is:",Secnum);
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Grade Calculate !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//

// 90+  => Grade A
// 80+  => Grade B
// 70+  => Grade C
// 60+  => Grade D
// 35+  => Pass
// Below 35 => Fail

let Marks = 55;

if(Marks >= 90){
  console.log("Grade A");
}
else if(Marks >= 80){
        console.log("Grade B");
}
else if(Marks >= 70){
        console.log("Grade C");
}
else if(Marks >= 50){
        console.log("Grade D");
}
else if(Marks >= 35){
        console.log("Pass");
}
else{
    console.log("Fail");
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Largest of  three number @@@@@@@@@@@@@@@@@@@@@@@@@@@//

const Comnum1 = 10;
const Secnum1 = 4;
const threnum1 = 555;

if (Comnum1 > Secnum1 && Comnum1 > threnum1) {//&& Compare both value if true then go forward
    console.log("Largest Number is:", Comnum1);
} else if (Secnum1 > Comnum1 && Secnum1 > threnum1) {
    console.log("Largest Number is:", Secnum1);
} else {
    console.log("Largest Number is:", threnum1);
}










































