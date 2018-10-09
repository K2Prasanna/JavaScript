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
restParamsNArrays();
convertType();
operators();
functionFeatures();
testCallNApplyNBind();
arrowFunctions();

