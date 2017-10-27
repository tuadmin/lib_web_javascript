//Emulating and use 2 threads
var examples3_data_dummy=[
    {name:'jhon',email:'jhon@mail.com'},
    {name:'betty',email:'betty@mail.com'},
    {name:'alex',email:'alex@mail.com'}
];
var examples3_batchSize = 2;//send 2 functions in same time
var examples3=window.tuadmin.batchPromises(examples3_data_dummy,function(data,resolve,reject){
    console.log("Prepare for sending email to "+ data.email);
    setTimeout(function(){
        console.log("email  " +data.email+" Send to"+ data.name);
        resolve(data);
    },2000);//for 2 second
},examples3_batchSize);//check this line
examples3.then(function(data){
    console.log("All email sending in 4 seconds");
})
