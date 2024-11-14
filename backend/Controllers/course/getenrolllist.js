const enrollmodel = require("../../Models/Enrollment");

exports.getenrolllist = async (req, res) => {
    try {
      const useremail = req.user.email;
    
      const user = await enrollmodel.findOne({ email: useremail });
  
      if (!user) {
        return res.status(404).json({ enrolled: false, message: "User not found or not enrolled" });
      }

      const courselist = user.course; 
      res.status(200).json({courselist});
    } catch (error) {
      console.error(error);
      res.status(500).json({ enrolled: false, message: "Server error", error });
    }
  };
  