const app=require('../restorentAPI/config/express')
require('../restorentAPI/config/mongoose')
const port=3000;
const userRoute=require('../restorentAPI/route/user.route');
const resturantRoute=require('../restorentAPI/route/resturant.route')
        
app.use('/api/user',userRoute);
app.use('/api/user',resturantRoute)


app.listen(port,()=>{
    console.log("Server started at =" + port);
})
