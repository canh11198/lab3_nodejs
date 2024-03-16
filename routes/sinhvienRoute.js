const express = require('express');
const router = express.Router();
const sinhvien = require('../models/sinhvienModel');
// get (select)
// cách triueej goi http://localhost: 5000/
router.get('/',async (req,res)=>{
    try {
        const sinhviens = await sinhvien.find(); // lấy về toàn bộ sv
         //res.json(sinhviens);
        res.render('sinhviens',{sinhviens: sinhviens}); //trả về file ejs
        console.log(sinhviens);
    } catch (error) {
        console.log(error);
        res.json({error:error});
    }
});
//post (new sinnhvien)
router.post('/sinhvien',async(req,res)=>{
    try {
        const {id,name}= req.body;// lấy dữ liệu ng dùng nhập từ react native
        const sinhvien1 = new sinhvien({id,name});// tạo dữ liệu mới với dữ liệu user nhập
        await sinhvien1.save();// luu vào bảng dữ liệu
        res.json(sinhvien1);// trả về kq
        console.log(sinhvien1);

    } catch (error) {
        console.log(error);
        res.json({erro: error})
    }
});
// put(update)
//http://localhost: 5000/sinhvien/:_id
router.put('/sinhvien/:_id',async(req,res)=>{
    try {
        const _id = req.params._id;
        const {id,name}= req.body;// lấy dữ liệu ng dùng
        const updateSinhVien = await sinhvien.findByIdAndUpdate(_id,{id,name},{new: true});
        res.json(updateSinhVien);
        console.log(updateSinhVien);
    } catch (error) {
        console.log(error);
        res.json({error: error});

    }
});
// delete
//http://localhost: 5000/sinhvien/:_id
router.delete('/sinhvien/:_id',async (req,res)=>{
    try {
        const _id = req.params._id;
        const deleteSinhVien = await sinhvien.findByIdAndDelete(_id);
        res.json(deleteSinhVien);
        console.log(deleteSinhVien);
    } catch (error) {
        console.log(error);
        res.json({error: error});
    }
})


module.exports=router;