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
//function
//decelaretion ,invoke,return,parameters,expression
function nameOf_student()
{
console.log("Ashenafi tesfaye");
console.log("Assefa Demeke");
console.log("Berhanu Hadis");
console.log("Ambachewu Tareqeny");

}
nameOf_student();



function sumOf_number()
{
    var sum=20+78;
    return sum;
}
console.log(sumOf_number());

function mulOf_number(num1,num2)
{
    var mul=num1*num2;
    return mul;

}
console.log(mulOf_number(10,49));
//Object
// i)By object literal
let emp={
    id:1234,
    name3:"ashenafi",
    address:"Addis Abeba"
    
   
}
console.log(emp.id+" "+emp.name3+" "+emp.address);
// ii)By creating instance of Object
var gradute=new Object();
gradute.id=4567,
gradute.name="ashenafi",
gradute.departemt="software"

console.log(gradute.id+" "+gradute.name+" "+gradute.departemt)
// iii) By using an Object constructor
/*function dbu(name,slaray,address)
{
    this.name=name;
    this.slaray=slaray;
    this.address=address;
}
let e=dbu("ashenafi",400,"addis abeba");
console.log(e.name,e.slaray,e.address);*/
//logical operaters
// logical And
let day="monday";
let salary=6000;
if(day==="monday"&&salary==6000)
{
    console.log(" both condition is true");

}
else{
    console.log("both or one of them is false");
}
//logical OR
let day1="sunday";
let namee="ashenefi";
if(day1=="sunday" || namee==="ashenafii")
{
    console.log("Display one of two condition is true");
}
else
{
    console.log("Display if both condition is false");
}
//Boolean
let text="hello";
if(text)
{
    console.log("Hello form the console ");
}
let textf=0;
if(textf)
{
    console.log("hello form the console if true");
}
else{
    console.log("Display if conditon is false");
}
//condition ?(true):(false)
let result=9;
result%2==0 ? console.log("even number") :
console.log("Odd number");
//assing non primitive value to a variable is done by reference
let num1=678;
let num2=234;
num2=90;
console.log(num1);
console.log(num2);
let obj={
    id:1118,
    name:"ashe"
}
let person1=obj;
console.log(person1.id+" "+person1.name);
person1.id=1000;
person1.name="argawu";
console.log(obj.id+"  "+obj.name);