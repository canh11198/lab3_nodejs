const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/sinhvienRoute');



const app = express();
// kết nooi mongodb
const uri = 'mongodb+srv://canhptph44323:Canh111989998@cluster0.goemyij.mongodb.net/and103'
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("kết nối thành công với server");
}).catch((err)=>{
    console.log(err);
});
app.use(bodyParser.urlencoded({extended: false}));//đọc dữ liệu từ req body
app.use(express.json()); 
// sử dụng route 
app.use('/',route);
// goi đến file ejs
app.set('view engine','ejs');
// tạo port 
const PORT = process.env.PORT||3000;
// chạy server
app.listen(PORT,()=>{
    console.log('server đang chạy ở cổng 3000');
})