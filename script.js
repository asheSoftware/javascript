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
//different between null and undefiend

let num3=20+null;
let num4=20+undefined;
console.log(num3);
console.log(num4);
//String
//CharAt()
var str="javascript";  
console.log(str.charAt(2));  

//JavaScript String concat(str) Method
var s1="javascript ";  
var s2="concat example";  
var s3=s1.concat(s2);  
console.log(s3);  
//JavaScript String indexOf(str) Method
var s1="javascript from javatpoint indexof";  
var n=s1.indexOf("from");  
console.log(n);
//JavaScript String lastIndexOf(str) Method
var s1="javascript from javatpoint indexof";  
var n=s1.lastIndexOf("java");  
console.log(n);
//JavaScript String toUpperCase() Method
var s1="JavaScript toUpperCase Example";  
var s2=s1.toUpperCase();  
console.log(s2);
//JavaScript String slice(beginIndex, endIndex) Method
var s1="abcdefghigklmn"
var s2=s1.slice(2,5);
console.log(s2);
//Global math
let number12=0.12345;
console.log(Math.floor(number12));
let number13=0.12345;
console.log(Math.ceil(number12));
let number14=16;
console.log(Math.sqrt(number14));
console.log(Math.min(1,2,3,5,0.8));
console.log(Math.max(8,90 ,889,78,890));
console.log(Math.random());
console.log(Math.abs(-44));
//Date in javascript
let date=new Date();
console.log(date);
let mounth=date.getMonth();
let days=date.getDate();
let years=date.getFullYear();
let milisecond=date.getMilliseconds();
console.log(mounth);
console.log(days);
console.log(years);
console.log(milisecond);
//MDN
let todolist=[];
/*
function additem(arr,item)
{
    arr.push(item);
}
additem(todolist,"hello ashenafi");
additem(todolist,"make moneny");

console.log(todolist);

let arrayname=[1,2,3,4,45,78,89];
console.log(arrayname);
*/
/*
function additem(arr)
{
    let answer=prompt("what like to do toDay?");
    
    let correct=answer.toLowerCase().trim();
   if(checkdublicate(arr,correct))
   {
    arr.push(answer);
   }
   else{
       alert("the item is already exist");
   }

}

function checkdublicate(arr,item)
{
let exist=false;
let index=arr.indexOf(item);
if(index!=-1)
{
exist=false;
}
else {
exist=true;
}
return exist;
}
function removeitem(list)
{
    console.log('you delete "${list[list.length-1]}"from array');
    list.pop();

}

additem(todolist);
additem(todolist);
additem(todolist);
removeitem(todolist);

console.log(todolist);*/
//string method 
//String length
// defining a string
let sentence = "I love ethiopian.";

// returns number of characters in the sentence string
let len = sentence.length;

console.log(len);

// Output:
// 17
let string2 = "javascript";

// assigning a value to string length property
string2.length = 5;

// doesn't change the original string
console.log(string2); // javacript

// returns the length of 'javascript'
console.log(string2.length); // 10
//charAt()
let str1="hello ashenafi";
let pos=str1.charAt(9);
console.log(pos);//e
//concat
let pass="hello i am ashenafi";
let pass1="i like to code";
let fpass=pass.concat(" ",pass1);
console.log(fpass);
//endsWith
let end="hello i am ashefi i gradute from debre berhian.";
let endd=end.endsWith("debre berhian.");
console.log(endd);//return ture
//includes()
let incl="Hello this is javasript";
let checkincludes=incl.includes("this");
let checkincludes1=incl.includes("javaa");
console.log(checkincludes);//retrun true
console.log(checkincludes1);//retrun false
//indexOf()
let indexoff="hello the programmer all over the world";
let indexcheck=indexoff.indexOf("programmer");
console.log(indexcheck);//return the first index of programmer that is 10
//match()
const message = "JavaScript is a fun programming language.";

// regular expression that checks if message contains 'programming'
const exp = /programming/;

// check if exp is present in message
let result1 = message.match(exp);
console.log(result1);