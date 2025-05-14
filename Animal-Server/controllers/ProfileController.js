import AuthModel from '../Models/AuthModal.js';

class ProfileController{

static FetchDetails =async (req,res)=>{
    try {
        const FetchData = await AuthModel.findOne({user : req.user._id});
        return res.status(200).json(FetchData);
    } catch (error) {
        return res.status(400).json({message :error.message});
    }
}

}

export default ProfileController;