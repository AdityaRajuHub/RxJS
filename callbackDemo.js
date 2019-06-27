
function begin(i, callback) {
    console.log("Beginning...");
    callback(i, second);
}
function first(i, callback) {
    setTimeout(() => {
        console.log("from first");
        if (i == 0)
            throw new Error("Value cannot be zero");
        else
            callback(i, third);
    }, 1000);
}

function second(i, callback) {
    setTimeout(() => {
        console.log("from second");
        callback();
    }, 2000);
}

function third(i) {
    setTimeout(() => {
        console.log("from third");
    }, 3000);
}

try {
    begin(1, first);
} 
catch (err) {
    console.log(err);
}
console.log("This is executed in the meantime...");