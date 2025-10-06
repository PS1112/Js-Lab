// que: 1 
let a = 10;

function test() {
    let a = 20;
    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log(a);
}

test();
console.log(a);

// output : 30,20,10 because let is block scoped and in above code is declared in different scopes.


// que: 2
console.log(x);
var x = 5;

console.log(y);
let y = 10;


// output : undefined and error


// que: 3

function scopeTest() {
    if (true) {
        var varVar = "var";
        let letVar = "let";
        const constVar = "const";
    }
    console.log(varVar);
    console.log(letVar);
    console.log(constVar);
}

scopeTest();


// output:  var, referenceError. var is not blockscoped so it will be var but, because let is block scoped and is is declared inside if block but not in function block.



// que: 4

hoistTest();

function hoistTest() {
    console.log("Function hoisted!");
}

hoistTest2();

var hoistTest2 = function() {
    console.log("Will this work?");
}


// output: "Function hoisted" , typeError. because with function body declared it can be accessed before delaration but using var it cannot be.

// que: 5 

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}

// output: 3, 3, 3, 0, 1, 2. because var is not block scoped and before settimeOut values will be 3 for all iterations. and let will create new j for each iteration so 0,1,2
