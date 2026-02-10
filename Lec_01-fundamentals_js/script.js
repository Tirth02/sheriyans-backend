// Fundamentals of Javascript
// arrays and object
// functions return
// async js coding

var arr = [1,2,2,3,4]
// forEach map filter find indexOf

arr.forEach(function(val){
    console.log(val+" hello");
})

var newArr = arr.map(function(val){
    return 13;
})

var ans = arr.filter(function(val){
    if(val > 1) return true;
    return false;
})

var findArr = arr.find(function(val){
    if(val == 4) return val;
})

// console.log(newArr);
// console.log(ans);
// console.log(findArr);

// indexOf methods
// console.log(arr.indexOf(10));
// console.log(arr.indexOf(4));
// console.log(arr.indexOf(2));

// Objects
var obj = {
    name: "Tirth",
    age: 24
}

Object.freeze(obj);
obj.name="Meet"
console.log(obj);


//functinon
function abcd(){
    return "hello world"
}

var returnText = abcd()
console.log(returnText);


// line by line code chale isse kehte hain synchronous

// jo bhi code async nature ka ho, usey side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi saara sync code chal jaaye, tab check karo ki async code complete hua ya nahi and agar wo complete hua ho to usey main stack mein laao and chala do









