//example ilustrative
var examples1= window.tuadmin.batchPromises([1,2,3,4,5],function(data,resolve,reject){
    setTimeout(function(){
        console.log("processing array "+data);
        resolve(data);
    },1000);//for 1 second
});
examples1.then(function(data){
    console.log("end batch",data);
});
