//emulating sending emails
var examples2_data_dummy=[
    {name:'jhon',email:'jhon@mail.com'},
    {name:'betty',email:'betty@mail.com'},
    {name:'alex',email:'alex@mail.com'}
];
var examples2=window.tuadmin.batchPromises(examples2_data_dummy,function(data,resolve,reject){
    console.log("Prepare for sending email to "+ data.email);
    setTimeout(function(){
        console.log("email  " +data.email+" Send to"+ data.name);
        resolve(data);
    },2000);//for 2 second
});
examples2.then(function(data){
    console.log("All email sending");
});
