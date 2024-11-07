const scoremodel = require("../../Models/Scoreboard");

exports.score = async(req,res)=>{
       
        const user = scoremodel.findById(req.user.id).select('-password');
       
        if(!user){
            res.send("user not found");
        }
        res.status(200).json({user});
        
}