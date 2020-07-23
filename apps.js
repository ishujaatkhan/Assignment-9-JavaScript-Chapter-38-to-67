38 - 42
//TASK 1

// function power(){
// var powers=1;
//     var a= prompt("Enter value of a");
//     document.write("The value of a is  "+a+"<br>")
//     var b= prompt("Enter value of b");
//     document.write("The value of b is  "+b+"<br>")
//     for ( i = 1 ; i <= b ; i ++ )
//  {
//         powers = powers*a;
//         var c= document.write(powers+"<br>")
//  }
// }
// power();

//TASK 2

// function leapYear(){

//     year = parseInt(prompt("Enter year"));
//     if((year % 4 == 0)&& (year % 100 != 0)){
//         document.write("Leap Year")

//     }else{
//         document.write("Its not Leap year")
//     }

// }
// leapYear()

//TASK 3

// function triangle(){
//     var a=parseInt(prompt("Enter value of a "))
//     document.write("The value of a is "+a+"<br>")
//     var b=parseInt(prompt("Enter value of b "))
//     document.write("The value of b is "+b+"<br>")
//     var c=parseInt(prompt("Enter value of c "))
//     document.write("The value of c is "+c+"<br>")
//     var d=0;
//     d=((a+b+c)/2)
//     // document.write(d +"<br>")
//     var area=0;
//     area= Math.sqrt(d*(d-a)*(d-b)*(d-c))
//     document.write("The Area of triangle is  "+area+"<br>")
// }
// triangle()

//TASK 4
// function student() {
//     var a = parseInt(prompt("Enter Total number of Math "))
//     document.write("Marks of Math  :" + a + "<br>")
//     var b = parseInt(prompt("Enter Total number English "))
//     document.write("Marks of English  : " + b + "<br>")
//     var c = parseInt(prompt("Enter Total number of Urdu"))
//     document.write("Marks of Urdu  : " + c + "<br>")
//     var total = a + b + c;
//     document.write("The total number of three subject is" + total + "<br>")

//     function average() {
//         var aver = ((total) / 2)
//         document.write("The Average marks of three subject is  :" + aver + "<br>")
//     }
//     average();

//     function percentage() {
//         var per = ((total / 300) * 100)
//         document.write("The percentage of Student is " + per + "%"+"<br> ")
//          }
//          percentage();

// }
// student()

//TASK 5

// function myFunction() {
//     var str = prompt("Enter your word");
//     document.write(str+"<br>")
//     var n = str.indexOf(prompt("Enter a word which you find its index"));
//     document.write(n)

//   }
//   myFunction()

//TASK 6
// function sdelete(){
//     var s="Thank You Saylani";
//     document.write(s+"<br>");
//     s.replace(/[aeiouAEIOU]/g, "");
//     document.write(s)
// }
// sdelete()

//TASK 8
// function user(){
// var a= prompt("Enter distance between 2 cites in km ")
// document.write(a+"Kilometer"+"<br>")

// function meter(){
//     var m= (a*1000);
//     document.write(m+"meter"+"<br>")
//     }
//     meter()
//     function feet(){

//     var f =(a * 3280.8)
//     document.write(f+"feet"+"<br>")
//     }
//     feet()

//     function centimeters(){

//         var c =(a* 100000)
//         document.write(c+"centimeter"+"<br>")

//     }
//     centimeters()

// }
// user()

//TASK 9

// function employee(){

//     var em=parseFloat(prompt("Enter Your ovet time hour"))
//     document.write("The total hours of overtime is  :"+em+"<br>")
//     var s= 12.00;
//     var pay=(em*12.00)
//     document.write("Your Total payment of overTime is   :"+pay)
// }
// employee()

//TASK 10

// function withdraw(){

//     var a=parseInt(prompt("Enter your amount"))
//     document.write("Your Total amount is :"+a+"<br>")
//     document.write("You have "+Math.floor(a/100)+"  Hundred notes"+"<br>")
//     document.write("You have "+Math.floor((a%100)/50)+"  fifty notes"+"<br>")
//     document.write("You have "+Math.floor(((a%100)%50)/10)+" Ten notes"+"<br>")
// }
// withdraw()

//CHAPTER 42-48//
//TASK 1
//  function alertt(){
//      alert("Hello world");
//  }
//TASK 2
// function mobile(){
// alert("Thanks for purchasing a phone from us")
// }
//TASK 3
// function deleterow(o) {
//     //no clue what to put here?
//     var p=o.parentNode.parentNode;
//         p.parentNode.removeChild(p);
//    }
//TASK 4
// function changeImage(){
//     var img= document.getElementById("photo");
//     img.src="https://i.ytimg.com/vi/bT56vtvFQuE/maxresdefault.jpg"
// }
// function beforeImage(){
//     var img= document.getElementById("photo");
//     img.src="https://www.rd.com/wp-content/uploads/2017/12/01_astronaut_Yes-Outer-Space-Has-a-Smell%E2%80%94Here%E2%80%99s-What-It-Smells-Like_241509286_Andrey-Armyagov-1024x683.jpg"

// }
//TASK 5
// var clicks = 0;
// function myFunction() {

//     clicks += 1;
//     document.getElementById("def").innerHTML = clicks;
// }
// function decrease(){
//     clicks -= 1;
//     document.getElementById("def").innerHTML = clicks;
// }

//Chapter 48-52
//Task 1
// function dataEntry(){
//     var a=document.getElementById("first").value;
//     var b=document.getElementById("second").value;
//     var c=document.getElementById("third").value;
//     var d=document.getElementById("forth").value;

//     document.write("User Name  :"+a+"<br>"+"User Last Name :"+b+"<br>"+"User Email  :"+c+"<br>"+"User password   :"+d)

// }

//Task 2
//     function readmore(){

//     var text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque numquam voluptatibus, reiciendis aut tempore quis vero magnam, expedita dolore unde assumenda consequuntur corporis at omnis exercitationem quibusdam. Porro, minus nam?"

// var perag=document.getElementById("para");
// perag.innerHTML=text;

// }
// TASK 3
// function dataEnter() {
//   var a = document.getElementById("first").value;
//   var b = document.getElementById("second").value;
//   var c = document.getElementById("third").value;
//   var d = document.getElementById("forth").value;
//   var e = document.getElementById("fifth").value;
//   var f = document.getElementById("six").value;
//   var g = document.getElementById("seven").value;

//   document.write(
//     "<table> <tbody ><tr><td>Students Name  :" +
//       a +
//       "<button  onclick='deleterow(this)'>Delete  </button>" +
//       "<button onclick='edited()' >Edit</button>" +
//       "<br>" +
//       " </tr></td><tr><td>Students Father Name :" +
//       b +
//       "<button onclick='deleterow(this)'>Delete</button>" +
//       "<button>Edit</button>" +
//       "<br>" +
//       "</tr></td><tr><td>Students Email  :" +
//       c +
//       "<button onclick='deleterow(this)'>Delete</button>" +
//       "<button>Edit</button>" +
//       "<br>" +
//       "</tr></td><tr><td>Students Number  :" +
//       d +
//       "<button onclick='deleterow(this)'>Delete</button>" +
//       "<button>Edit</button>" +
//       "<br>" +
//       "</tr></td><tr><td>Students Date Of birth  :" +
//       e +
//       "<button onclick='deleterow(this)'>Delete</button>" +
//       "<button>Edit</button>" +
//       "<br>" +
//       "</tr></td><tr><td>Students Class  :" +
//       f +
//       "<button onclick='deleterow(this)'>Delete</button>" +
//       "<button>Edit</button>" +
//       "<br>" +
//       "</tr></td><tr><td>Students Class Result  :" +
//       g +
//       "<button onclick='deleterow(this)'>Delete</button>" +
//       "<button>Edit</button>" +
//       "<br>" +
//       "</tr></td></table> </tbody>"
//   );
// }

// function deleterow(o) {
//   //no clue what to put here?
//   var p = o.parentNode.parentNode;
//   p.parentNode.removeChild(p);
// }
// function edited() {}



// CHAPTER 58 - 67
// TASK 1

//     var a = document.getElementById('main-content');
//     // console.log(a.childNodes);

// var b = document.getElementsByClassName('render')
// var text = b.innerHTML;
// document.write(text);

// var c = document.getElementById('first-name')
// var inputFirstValue = c.childNodes.innerHTML = "Shujaat"
// console.log(inputFirstValue)

// var d = document.getElementById('last-name')
// var inputLastValue = d.childNodes.innerHTML = "Khan"
// console.log(inputLastValue)

// var e = document.getElementById('email')
// var inputEmail = e.childNodes.innerHTML = "mail2shujaatkhan@gmail.com"
// console.log(inputEmail)


// TASK 2
// var a = document.getElementById('form-content')
// console.log(a.nodeType);


// var b = document.getElementById('lastName')
// console.log(b.nodeType);
// console.log(b.childNodes[0].nodeType)

// var c = document.getElementById('lastName')
// var child = c.childNodes.innerHTML = "shujaat"
// console.log(child)

// var d = document.getElementById('main-content')
// var firstChild = d.firstChild
// var lastChild = d.lastChild
// console.log(firstChild,lastChild)

// var e = document.getElementById('lastName')
// var sibiling = e.previousSibling
// console.log(sibiling)


// var f = document.getElementById('email')
// var parent = f.parentNode
// var type = f.nodeType
// var parentNodeType = parent.nodeType
// console.log(parent,type,parentNodeType)

