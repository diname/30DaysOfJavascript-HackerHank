function processData(input) {
    //Enter your code here
    const array = input.split("\n")
    array.shift()
    
    array.forEach(e => {
        e = parseInt(e);
       let isPrime = true;
       if(e == 1) return console.log("Not prime");
       for(i = 2; i < e; i++) {
           if(e % i == 0) {
               isPrime = false;
               break;
           }
       } 
       if(isPrime) console.log("Prime");
       else console.log("Not prime");
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
