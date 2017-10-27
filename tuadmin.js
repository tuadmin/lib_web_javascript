window.tuadmin={};
window.tuadmin.batchPromises=function(arrayData,callback,batchSize){
    batchSize = batchSize>0?batchSize:1;
    var fn= function(data){return new Promise(function(resolve,reject){
        callback(data,resolve,reject);
    });};
    return Promise.resolve(arrayData)
    .then(function(arr) {
        return arr
        .map(function(_, i) {
            return i%batchSize ? [] : arr.slice(i, i+batchSize);
        })
        .map(function(group) {
            return function(res) {//console.log(fn,group.map(fn));
                return Promise.all(group.map(fn)).then(function(r) {
                    ///console.log(r);
                    return res.concat(r);
                });
            }
        })
        .reduce(function(chain, work) {
            return chain.then(work);
        }, Promise.resolve([]));
    });
}
/*
var examples1= window.tuadmin.batchPromises([1,2,3,4,5],function(data,resolve,reject){
    setTimeout(function(){
        console.log("processing array "+data);
        resolve(data);
    },1000);//for 1 second
});
examples1.then(function(data){
    console.log("end batch",data);
});
*/
