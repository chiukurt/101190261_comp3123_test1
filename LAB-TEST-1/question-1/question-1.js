//Kurt Chiu 101190261 Lab test 1 - COMP3123

//Question 1

function lowerCaseWords (input){
    let output = [];

    let prom = new Promise (function(resolve,reject){
        for (i in input) {
            if ( typeof (input[i])== 'string') {
                output.push(input[i].toLowerCase());
            }
        }
        resolve (output);
    });
    return prom;
}

const mixedArray = ['PIZZA',10,true,25,false,'Wings'];
console.log (lowerCaseWords(mixedArray));