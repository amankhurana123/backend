const express=require('express');
const router=express.Router();
const uploadapi=require("../api/uploadapi");
const multer=require('multer');
let storage= multer.diskStorage({
	destination: function(req, file, cb){
		cb(null,"./upload")
	}, 
	filename: function(req,file,cb){
		cb(null, file.originalname)
	}
});
let upload=multer({storage: storage});
router.post('/upload',upload.single("thumbnail"),async function(request,response){
    console.log("request body", request.body);
    console.log("req.file",request.file);
    try{
        const upload=await uploadapi.uploadPost(request.body);
        response.send(upload);
        console.log(upload);
    }
    catch(err){
        console.error({Error: err});
    }
})
router.post('/uploadPost',async function(request,response){
    //console.log("requestBody", request.body);
    try{
        let appp=await uploadapi.getUploadedData();
        if(appp.length === 0){
            response.send(appp);
            console.log(app);
        }
        else{
            response.send(appp);
            console.log(app);
        }
    }
    catch(err){
        console.log(err);
    }
})


module.exports=router;