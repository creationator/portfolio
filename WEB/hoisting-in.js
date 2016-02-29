//Variable declaration and
//function definition are hoisted to the top



//Variable hoisting

var myVariable = 'Outer Value'; // global variable
var fn = function() {
    alert(myVariable);
    var myVariable = 'New Local Value';
};

fn();

// This is what really happens with this block of code
var myVariable = 'Outer Value'; // global variable
var fn = function() {
    var myVariable; //This is the new hoisted declaration
    alert(myVariable);
    myVariable = 'New Local Value';
};

fn();






//Function hoisting

function fnDelcaration() {
    return 'This is a declaration';
};

var fnExpression = function() { //anonymous function expresssion
    return 'This is an expression';
};



//These are function declarations
function foo () {
    function bar () {
        return 1;
    }
    return bar();
    function bar() {
        return 2;
    }
}
alert(foo());

//This is what happens under the hood
//function bar with the return of "2" gets
//hoisted above the "return bar" statement
function foo() {
    function bar () {
        return 1;
    }
    function bar () {
        return 2;
    }
    return bar();
}
alert(foo());



//These are function expressions
function foo() {
    var bar = function() {
        return 1;
    };
    return bar();
    var bar = function() {
        return 2;
    };
}
alert(foo());

//This is what happens under the hood

function foo () {
    var bar = undefined;
    var bar = undefined;
    bar = function() {
        return 1;
    };
    return bar ();
}
alert(foo());



function food () {
  function bar () {
    return "1 plate of food";
  }
  return bar();
  function bar() {
    return "1 empty plate";
  }
}

alert(food());

function() {
  function bar () {
    return "1 plate of food";
  }
  function bar () {
    return "1 empty plate";
  }
  return bar();
}
alert(food());
