var rxjs= require('rxjs');

var observable= rxjs.Observable.create(subscriber => {
    subscriber.next('Some value');
    setTimeout(()=>subscriber.next('Some asynch value will be sent'), 1000);
    setTimeout(()=>subscriber.next('This value will never be sent'), 2000);
    setTimeout(()=>subscriber.complete(), 1500);
});

//observer
var subscriber = observable.subscribe(value => {
    console.log("New value appeared: "+value);
},
error => console.log(error),
() => console.log("Completed"));

//subscriber.unsubscribe();