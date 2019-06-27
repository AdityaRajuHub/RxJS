var begin = new Promise((resolve, reject) => {
    console.log('Beginning...');
    resolve(0);
})
    .then(i => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("from first");
                if (i == 0)
                    reject("Error: Value cannot be zero");
                else
                    resolve(i);
            }, 1000)
        })
    })
    /*.catch(err => {       //if catch present here then the next promise will be executed in the chain
        console.log(err);
    })*/
    .then(i => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("from second");
                resolve();
            }, 2000);
        })
    })
    .then(() => {
        setTimeout(() => {
            console.log("from third");
        }, 3000);
    })
    .catch(err => {         //if catch present here then the next promises will not be resolved
        console.log(err);
    })