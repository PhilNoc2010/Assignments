///#1
console.log(hello);
var hello = 'world';
// undefined

let hello;
console.log(hello)
hello='world'

///#2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// magnet

function test(){
    var needle = 'magnet'
    console.log(needle)
}
test()

/// #3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//super cool

let brendan = 'super cool'
console.log(brendan)

///#4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// chicken
// half-chiken
let food = 'chicken';
console.log(food);
function eat(){
    var food = 'half-chicken';
    console.log(food);
    }
eat()


/// #5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// reference error
var food
var mean = function() {
    var food = "fish";
    console.log(food);
    food = "chicken";
    console.log(food);
}
mean();
console.log(food);

//#6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// undefined
//rock
//r&b
//disco

var genre
console.log(genre);
function rewind() {
    var genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
rewind();
var genre = "disco";
console.log(genre);

//#7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// san jose
// seattle
// burbank
// san jose

var dojo = "san jose";
console.log(dojo);

function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);

// #8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// {'name':Chicago ; 'students': 65, 'hiring' : true}
// { 'name':'Chicago' ; 'students': 65, 'hiring' : 'closed for now' }


function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));