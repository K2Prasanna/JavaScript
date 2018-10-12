console.log('Hello World Web 21!!');
/*
null = user asigns a variable to null value. 
undefined = js makes a variable undefined if not initialized.
typeof = shows type of argument.
NaN is of type number. null is of type object.
for and while loops with break, continue same as java

let and var : for variable declaration 
**let should be used than var...has block scope and errors if not declared etc. cleaner way of coding
var does not have block scope.
** best practice to use === than == as it also cehcks type of the arguments along with values.

logical operators 
&&, ||,! -- && has precendence over ||


relational operators 
<,> <=,>= -- in case of strings, checks for ascii value of the string. uppercase are less than loweer case.

conditional/tertiary operator a > b ? c : d

assignment operators 
+=, -=, *=, /=, %= - perfroms operation and then assign the value to variable
<<=,>>= - shifts bits to direction retain the sign value. does not rotate sign bit.
>>>= shifts bits considering as unsigned number. rotate all bits inclusing sign bit..
<<<= DOES NOT EXIST

operator precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

this - similar in java, refers to the current object in member methods. to be used to refer object attributes and methods 
within object. refers to window object if refered outside of object.

functions -  'call' on object method changes the refernces of this in object to argument object
'apply' on object method is similar to call, can pass arguments with an array.
call and apply do not create copy of the functions, they set the context of existing function to new object
'bind' creates a copy of the function and sets context for new function with new object.
** best practice is default parames should be listed to the end than in first in function declarations.
arrowfunctions : concise way for defining function with arrows. does not have own 'this' context. use context of parent.

constructors and prototype
when creating a function in constructor, there will be many copies of function as it will be created for each object. 
prototype solves the issue and creates only one method for all objects being created for an object type
polyfill - protoype is the way to expand functionality of existing object types by adding functions dynamically to the type and calling them on all objects.

JSON.parse  : converts string to javascript object or arrrys.
JSON.Stringify : converts javascript object or arrays to string


Array functions:
forEach - easier way to iterate the arrays
filter - filters the array for a condition and return new array of the result.
every - every checks for a condition to be by all objects in the array. returns false even if one of them fails to meet.
find - finds the first object in array which satisfies the condition.

class - similar to java, supports inheritance.

modules - class defined in its own js file and exported from the file to be available for program.
then use import to import class and use in main program.


BOM and DOM: Browser object Model and Document Object Model
Window : global object in javascript, represents the browser,
Timers : Async, event handling.
Promise is the way to handle reponses from sync opeartions. on return promise.then is called.

DOM: document object model
methods and variables to access events, properties  and methods for document/HTML Body access and manipulation.

try, catch, finally - same as in java

HTTP: Running with jquery is preferred than Xhr
mockapi.io: site for mocking http endpoint with data.

security: browsers show code, not safe, so shd not store sensitive info in the variables, shd not use global variable (on windows) - browser debugging watch show them.
avoid using eval, (eval converts test into code and executes the same. dynamic scripts)
for man in middle attack - use ssl and secured cookies.

For XSS: CSP, CORS HTTP headers

for webpack 
dev runs : npm run dev
prod: npm run build : minimises files, variables.

objects:
can add properties and functions to objects after object creation in java scripts.

*/

function restParamsNArrays()
{
   //constant, has to be initialized and cant be changed.
    const a = 100;

  //  a = 50;
    let array = [100, 200, 300, 400, 500];
    let v1, v2, rest;

    //destructuring arrays and rest params. 
    //rest params collect rest of the paramters in an array.
    [v1, v2,...rest] = array;
    console.log(a, v1, v2, rest);

    let v4, v5, rest1;
    [, v5,...rest1] = array;
    console.log(v4, v5, rest);

    //destructing objects.
    let car = {id : 400, style: "convertible"};
    //let {id, style} = car; //works fine.
    let id, style;
    ({id, style} = car); //needs paranthesis for diff between a code black and destructuring.
    console.log(id, style);

    //spread params ...opposite of rest...converts array to parameters.
    let nums = [1, 2, 3, 4, 5];
    testSpread(...nums);

    let str = 'abcdef';
    testSpread(...str); //string is iterable and gets converted to array of char on spread.

}
/*
* testing the spread variable
*/
function testSpread(n1, n2, n3,...restNs)
{
    console.log(n1, n2, n3,restNs);
}

/*
* covert numeric part of teh string. string has to start with number only. or else return nan.
*/
function convertType()
{
    console .log ('*********Type conversion***********');
    let str = '58ABC';
    let strf = '58.88ABC';
    let notanum = 'ABC58';
    let num = 56.78;
    let fn = function()
    {
        console.log('this is a function');
    };

    console.log(typeof(fn));
    console.log(fn.toString());
    console.log(num.toString());
    console.log(Number.parseInt(str));
    console.log(Number.parseFloat(strf));
    console.log(Number.parseFloat(notanum));
}

function operators()
{
    console .log ('*********operators***********');
    //equality operator
    let id = 123, idstr = '123';
    console.log(id == idstr); //true
    console.log(id != idstr); //false
    console.log(id === idstr); //false
    console.log(id !== idstr); //true

    //unary operator
    let i = 23;
    let istr = '45';
    console.log(++i); //pre-increment and then statement execution
    console.log(i++); //increment post execution of statement
    console.log(i);
    console.log(typeof(+istr),+istr); //+ converts string to a number
    console.log(-i); //negates the value of a number
    console.log(typeof(-istr),-istr); //converts to number and negates

    //logical opeartors.
    if(5 == 5 && 6 === 3)
    {
        console.log('never printed');
    }

    if(5 == 5 || 6 === 3)
    {
        console.log('OR Printed');
    }

    if(5 == 5 || 6 === 6)
    {
        console.log('AND Printed');
    }

    let car1 = null;
    let car2 = {name:'Ferrari'};
    let car3 = {name: 'Mercedes'};
    console.log(car1 || car2); //prints not null first argument, prints null if all arguments null
    console.log(car1 || car2 || car3);
    console.log(car1 && car2); //first first null if any of them is null or last argument.
    console.log(car2 || car3); 
    console.log(car2 && car3); 

    if(car1 || car2 || car3) //checks if the objects are not null and return true.
    {
        console.log('check for null suceeded');
    }
    console.log(!car1,!car2,!car3); //negates value checks for if any of teh object is null and returns true

    let str1 = 'Zoo';
    let str2 = 'alphabet';
    console.log(str1 < str2); //true as upper case smaller than lower case.
    console.log(str1.toUpperCase() < str2.toUpperCase()); //false as z is larger than a

    //asssignment operators +=, -=, *=, /=, %=, <<=,>>=, >>>=

    {// the new blaock allows re-declaration of variable i as it is in block scope, else we get error
 //new variable if declared within block remains native to block only and not visible outside teh blosk. 
 //a block refer variable which is in parent block. it can reclare teh variable within new black, but changes to the variable remains native to the balock only.
    
    let i = 10;
    console.log(i += 10); //20
    console.log(i -= 10); //10
    console.log(i *= 10); //100
    console.log(i /= 10); //10
    console.log(i %= 10); //0;
     i = 256;
     let j = -256;
    console.log(i <<= 1); //512 
    console.log(i >>= 1); //256
    console.log(i >>>=1); //128 
    console.log(j >>=1); //-128
    console.log(j >>>=1); //217.... considers the number as unassigned and rotate bit.
    }   

}

function functionFeatures()
{
    //function scope
    let message = 'Hi';
    let msg2 = 'Hi2';
    let fn = function innerFn()
    {
        let msg2 = 'Hi3';
        message = 'Go';
        let msg3 = 'Gone';
        console.log(message,msg2, msg3); //Go, Hi3, Gone
    };
    fn();
    //console.log(message,msg2, msg3); //error msg3 not defined
    console.log(message,msg2); //Go, Hi2

    //IIFE immidiately invoked function expression. Executes immidiately at the time of assignment.
    let app = (function(){
        let id = 12;
        console.log('in IIFE');
        return {appid : id, name: "ABC"}; //closure
    })();
    console.log(app.appid, app.name); //prints return value from IIFE function.

    //closure with IIFE. closure (return values for IIFE) : retains a inner function or variable even after fucntion executes. 
    console.log('init IIFE');
    let app2 = (function(){
        console.log('in IIFE with closure');
        let id = 12;
        let getId = function()
        {
            console.log('in getID',this.id);
            return id++;
        };
        
        return {getId : getId}; //closure
    })();
    console.log('accessing closure');
    console.log(app2.getId()); //12
    console.log(app2.getId()); //13


    //defaultParameters
    let fndefaultparams = function(id, color='blue')
    {
        console.log(id + ": "+ color);
    };
    fndefaultparams(123); //123: blue
    fndefaultparams(456,'yellow'); //456: yellow
}
/*
call, apply and bind chnages the context for 'this' in object to new object.
*/
function testCallNApplyNBind()
{
    let o = { id: 123, 
        getId : function()
        {
            
            return this.id;
        },
        getIdWPrfx : function(prefix)
        {
            
            return prefix + this.id;
        }
    };
    let newO = { id: 456};
    console.log(o.getId.call(newO));
    console.log(o.getIdWPrfx.call(newO,'IDCALL: ')); //456 call chnages the refernces of this in object to argument object. can take argument as comma separated.
    console.log(o.getIdWPrfx.apply(newO,['ID: '])); //apply is similar to call, can pass arguments with an array.
    
    let newFn = o.getId.bind(newO);  //'bind' creates a copy of the function and sets context for new function with new object.
    let newFn2 = o.getIdWPrfx.bind(newO,['BIND-ID: ']); 
    console.log(newFn());
    console.log(newFn2());
}

/*
arrowfunctions : concise way for defining function with arrows. does not have own 'this' context. use context of parent.
*/
function arrowFunctions()
{
    let getId = () => 123;
    console.log(getId()); //123

    let getId2 = _ => 456; 
    console.log(getId2()); //456

    let getId3 = prefix => prefix+456; 
    console.log(getId3('ID: ')); //ID: 456

    let getId4 = (prefix,suffix) => prefix+456+suffix; 
    console.log(getId4('ID: ', '!!')); //ID: 456!!

    let getId5 = (prefix,suffix) => {
        console.log('executing arrow 5');
        let m = prefix+456+suffix; 
        return m; //when using with {}, return statement is required.
    };
    console.log(getId5('ID: ', '!!')); //ID: 456!!


}

function constructorFunction()
{
    let car = new Car(890);
    car.startCar();
    //dynamic property color and function run on car
    car.color = 'blue';
    car.run = function(){console.log('running')};
    console.log(car.color);
    console.log(car['color']); //same as car.color, bracket notation. can have props like ['Eye Color']. can get propery names from user dynamically.
    car.run();

}
//this is consctrutor function when called with 'new'
function Car(id)
{
    this.carId = id;
    this.startCar = function()
    {
        console.log('Starting car ' + this.carId); //this is must here. or else get error.
    };
}
//when creating a function in constructor, there will be many copies of function as it will be created for each object. 
//prototype solves the issue and creates only one method for all objects being created for an object type
function prototypeCheck()
{
    let car = new protoCar(567);

    protoCar.prototype.startCar = function()
    {
        console.log('starting proto '+ this.carId);
    };

    car.startCar();

    //create object using object.create()
   // let car1 = Object.create(Object.prototype,{name: 'car1',color='blue'});
   // console.log(car1);

}

function protoCar(id)
{
    this.carId = id;
}

function arrayFunctions()
{
    let cars = [ {id : 123, style: "compact"},{id : 234, style: "convertible"},{id : 311, style: "sedan"},{id : 245, style: "convertible"}];
    
    //forEach easier way to iterate the arrays
    cars.forEach(car => console.log(car.id));
    cars.forEach((car,index) => console.log(index,car.style));

    //filters the array for a condition and return new array of the result.
    let convertibles = cars.filter(car => car.style === 'convertible');
    console.log(convertibles); //2 lelements for convertible.

    //every checks for a condition to be by all objects in the array. returns false even if one of them fails to meet.
    let result = cars.every(car => car.id > 100); //true
    console.log('every ' + result);
    result = cars.every(car => car.id > 200); //false
    console.log('every2 ' + result);

    //finds the first object in array which satisfies the condition.
    let findCar = cars.find(car => car.id > 200); 
    console.log(findCar); //one element for 234
}

//Class is ES6 feature.
class TestCar
{
    constructor(id)
    {
        this.carId = id;
    }

    startCar(suffix)
    {
        console.log('starting test car in class: '+ this.carId + suffix);
    }
}

class F1TestCar extends TestCar
{
    constructor(id, speed)
    {
        super(id); // this is must to call constructor in super class
        this.speed = speed;
    }

    runCar(speed)
    {
        console.log('Running car at ' + speed);
    }

    startCar(suffix)
    {
        super.startCar(suffix); //optional (calling method from super) for normal methods.
        console.log('Reaching the initial speed ' + this.speed);
    }
}

function classTest()
{
    let car = new TestCar(123);
    car.startCar(' class');

    car = new TestCar(453);;
    car.startCar(' class2');

    let f1car = new F1TestCar(345,100);
    f1car.startCar(' F1');
    f1car.runCar(300);
}

function moduleTest()
{

    let f1car = new ModuleCar(345);
    f1car.startCar(100);
    f1car.runCar(300);
 

}

function testWindow()
{
     
    //as the year is not scoepd with let or this, it is on global window scope.
    //if we use the import module in our code, then the code becomes module and variable is not on window anymore, need to be declared with let or this. 
    //but we access global window proprties such as innerwidth etc. in this case (module case).
   // year = 1965; console.log(window.year); //to run this, comment the module import statement and moduletest method. 
    console.log(window.innerWidth);//works even with import module statement
}

function testTimer()
{
    console.log('testing timer event');

    let i = 0;
    //setTimeout runs once after the interval mentioned and stops.
    let timeoutId = setTimeout(function(){
        console.log('timeout event');
        clearTimeout(timeoutId); //does not affect run, only clears.
    },1000);


   console.log(timeoutId);
 
   
   //setInterval function executes multiple times till clearInterval called
    let intervalId = setInterval(function()
    {
        console.log('interval event'+i);
        i++;
        if(i >= 5)
        {
            clearInterval(intervalId);
        }
    },1000);


}

function testLocation()
{
    console.log(location); //location is BOM object provides information about the page.
    console.log(document.location); //same object is also associated with DOM object.
}

function testDom()
{
    let el = document.getElementById('p1');
    let elnames = document.getElementsByName('p2');
    let eltags = document.getElementsByTagName('p'); //tag for para is p
    let elclass = document.getElementsByClassName('p2');
    console.log(el,elnames,eltags,elclass);

    el.textContent = 'New Contents..';
    el.setAttribute('dummy',1234);
    el.classList.add('pc1');
    el.style.color = 'red';

    console.log(el);
}

class MyError extends Error //created custom error
{
    constructor(id)
    {
        super('Custom error ' + id);
        this.id = id;
    }
}

function testErrors()
{
    try
    {

        throw new MyError(20);
    }
    catch(myerror)
    {
        console.log(myerror);
    }
    finally{
        console.log('In Finally');
    }
    console.log('success');
}


function testPromise() //promise is the way to handle reponses from sync opeartions. on return promise.then is called.
{
    let promise = new Promise(function(resolve, reject)
    {
        //setTimeout(resolve, 1000);
        setTimeout(reject, 1000);
    });
    promise.then(
        value => console.log('Promise Resolved'),
        error => console.log('Promise Rejected')
    );

}

function testHTTPXhr()
{
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200) //succesful execution
        {
            console.log(this.responseText);
        }
    };

    xmlhttp.open("GET","http://5bc01da859c0e1001337f252.mockapi.io/test/mydata/mydata",true);
    xmlhttp.send();
}
 function testHTTPJQuery() //running with jquery is preferred than Xhr.
 {
    let promise = $.get("http://5bc01da859c0e1001337f252.mockapi.io/test/mydata/mydata");
    promise.then(
        data => console.log("Success",data),
        error => console.log("Error",error)
    );
     
    let user = {name: "Prasanna Kulkarni", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/lepetitogre/128.jpg", email: "dummy@mail.com"};
    let postPromise = $.post("http://5bc01da859c0e1001337f252.mockapi.io/test/mydata/mydata",user);
    postPromise.then(
        data => console.log("Successfully added user",data),
        error => console.log("Error while adding user",error)
    ); 
 }  


 function testForm()
 {
     let el = document.getElementById("user-form");
     el.addEventListener('submit',event => {
         let user = el.elements['username'];
         let email = el.elements['email'];
         console.log(user.value,email.value);
         if(user.value.length < 4)
         {
             let err = document.getElementById("user-error"); //el.elements does not work for spans.
             err.textContent = 'Invalid User';
             err.style.color = 'red';
             user.style.borderColor = 'red';
         } 
         else{
             let userObj = {
                 name: user.value,
                 email: email.value
             };
             let promise = $.post("http://5bc01da859c0e1001337f252.mockapi.io/test/mydata/mydata",userObj);
             promise.then(
                 data => console.log("Form data submitted successfully.",data),
                 error => console.log("Error while submitting data",error)
             );
         }
         event.preventDefault();
     });

 }
import $ from 'jquery'; //$ is object in jquery, no need of {} for $. added jquery.
//curly braces required. import statement cant be in a function.
import {ModuleCar} from '../models/ModuleCar.js'; 
//testTimer2();
restParamsNArrays();
convertType();
operators();
functionFeatures();
testCallNApplyNBind();

arrowFunctions();
constructorFunction();
prototypeCheck();
arrayFunctions();
classTest();
moduleTest();
testWindow(); 
testTimer();
testLocation();
testDom();
testErrors();
testPromise();
//testHTTPXhr(); uncomment the two methods to check the HTTP request methods.
//testHTTPJQuery();
testForm();