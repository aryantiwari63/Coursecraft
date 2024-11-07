const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aryantiwari:aglhakuhodo@cluster0.qz6lge5.mongodb.net/courseproject?retryWrites=true&w=majority&appName=Cluster0");
mongoose.connection.on('connected',()=>{
    console.log('mongodb connected');
})
mongoose.connection.on('error',()=>{
    console.log('error');
}) 

