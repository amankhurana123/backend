const mongoose=require('mongoose');
const upload=mongoose.Schema({
     uploadTitle: {type: String},
     thumbnail: {type: String},
     catagory: {type:String}
});
module.exports=mongoose.model("uploads",upload);