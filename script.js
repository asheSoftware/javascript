/*document.writeln("hello from external js");
alert("hello form external js");*/
//consile log statement
console.log("hello form console");
let name="Ashenafi Tesfaye";
//javascript variable contain digit,alphabet,underscore and dollar sign 
//start with letter,_ and $ not start in digit
//const ,let,var is the keyword
let $address,state,zip;
$address="Addis Abeba";
state="Ethiopian";
zip="200002"
console.log(name);
console.log($address);
console.log(state);
console.log(zip);
//sting concation 
let frist_name="Ashenafi";
let last_name="Tesfaye";
let full_name;
console.log("Hello from console your full name is"+" "+frist_name+" "+last_name+" ");
//numbers
let number1=566;
let number2=23.4;
let sum=number1+number2;
let sub=number1-number2;
let mod=number1%number2;
console.log(sum);
console.log(sub);
console.log(mod);
//implicity type converstion
let name1="ashenafi";
let name2="tesfaye";
let number=8989;
console.log(name1-name2);
console.log(name1+name2);
//number is implicitly converted in to string
console.log(name1+number);
//primitive data types
let employe=['ashenafi','dajane','argawi'];
let code=function code()
{
    console.log("hello from the function");
}
let person={
    name4:"ashenafi",
    fatherN:"tesfaye"
}
console.log(typeof(employe));
console.log(typeof(code));
console.log(typeof(person));
//Array
//how to crate an array in javascript 
// i)By array literal
var student_name=['ase','ashenafi','asen','ambachewu'];
var i;
for(i=0;i<student_name.length;i++)
{
    console.log(student_name[i]);
}
//JavaScript Array directly (new keyword)
var student_grade=new Array();
student_grade[0]=3.4;
student_grade[1]=3.5;
student_grade[2]=3.5;
student_grade[3]=3.0;
student_grade[4]=3.6;
student_grade[5]=3.8;
var i;
for(i=0;i<student_grade.length;i++)
{
    console.log(student_grade[i]);
}
//JavaScript array constructor (new keyword)
var student_state=new Array("oromia","Amara","somali","tigray");
var j;
for(j=0;j<student_state.length;j++)
{
    console.log(student_state[j]);
}