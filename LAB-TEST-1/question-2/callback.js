//Kurt Chiu 101190261 Lab test 1 - COMP3123

//Question 2

const resolvedPromise = () => {
    let prom = new Promise(function (resolve, reject) {
        setTimeout(() => {
            let success = { 'message': "Resolved promise after 500ms" }
            resolve(success);
        }, 500);
    });
    return prom;
}

const rejectedPromise = () => {
    let prom = new Promise(function (resolve, reject) {
        setTimeout(() => {
            try {
                throw new Error('error: delayed promise rejection after 500ms');
            } catch (e) {
                reject (e);
            }
        }, 500);
    });
    return prom;
}

console.log(resolvedPromise());
console.log(rejectedPromise());