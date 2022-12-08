const fs = require("fs");
const alphabet = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6,
    g:7,
    h:8,
    i:9,
    j:10,
    k:11,
    l:12,
    m:13,
    n:14,
    o:15,
    p:16,
    q:17,
    r:18,
    s:19,
    t:20,
    u:21,
    v:22,
    w:23,
    x:24,
    y:25,
    z:26,
    A:27,
    B:28,
    C:29,
    D:30,
    E:31,
    F:32,
    G:33,
    H:34,
    I:35,
    J:36,
    K:37,
    L:38,
    M:39,
    N:40,
    O:41,
    P:42,
    Q:43,
    R:44,
    S:45,
    T:46,
    U:47,
    V:48,
    W:49,
    X:50,
    Y:51,
    Z:52
}

fs.readFile("Day3Input.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

//enter code here.
//Split into a array.
var theArray = data.split("\n");
var match = [];
var total = 0;
var arrayCounter = 0;
var counter = 0;
var bag1 = "";
var bag2 = "";
var bag3 = "";



while (arrayCounter < theArray.length/3) {
    arrayCounter += 1;

    for (let x = 0; x < 3; x++) {     // splits array into groups of 3.
        bag3 = bag2;
        bag2 = bag1;
        bag1 = theArray[counter];
        counter += 1;
    }

    //compare. If this doesn't crash my computer idk what will lolol.         🚨🚨🚨  <<<<<<<<<< Lentil 🚨🚨🚨
    for(var a of bag1) {
        for(var b of bag2) {
            if (a === b){
                for (var c of bag3) {
                    if (a === c) {
                        match = a;  
                    }
                }
            }
        }
    }


//Assign each letter a number value and add up.
    total += alphabet[match[0]];
    console.log(total);
}















});



// var sideA = "";
// var sideB = "";

//Split each string in array in half using .length then compare both sides for the matching char.
    // sideA = i.slice(0, i.length/2);
    // sideB = i.slice(i.length/2, i.length);
    // console.log(sideA);
    // console.log(sideB);