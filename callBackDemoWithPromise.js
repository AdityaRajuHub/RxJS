
function begin(i) {
    return new Promise((resolve, reject) => {
        console.log("Beginning...");
        resolve(i);
    });
}

function first(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("from first");
            if (i == 0)
                reject("Value cannot be zero");
            else
                resolve(i);
        }, 1000)
    });
}

function second(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("from second");
            resolve();
        }, 2000)
    });
}

function third(i) {
    setTimeout(() => {
        console.log("from third");
    }, 3000);
}

begin(0)
    .then(i => {
        first(i);
    })
    .catch(err => console.log(err))
    .then(i => {
        second(i);
    })
    .then(() => {
        third();
    });
    
console.log("This is executed in the meantime...");