import AuthModal from '../Models/AuthModal.js';
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';

class AuthController {

  static Register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
      if (username && email && password) {
        const user = await AuthModal.findOne({ email });

        if (!user) {
          // Password Hashing
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

          const newUser = new AuthModal({
            username,
            email,
            password: hashedPassword,
          });

          const savedUser = await newUser.save();

          if (savedUser) {
            return res.status(201).json({ message: "Registration Successful" }); // 201 = Created
          } else {
            return res.status(500).json({ message: "Failed to save user" });
          }
        } else {
          return res.status(409).json({ message: "User already registered" }); // 409 = Conflict
        }
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static Login = async (req,res)=>{
    const {email,password}= req.body;
    try {
        if(email&&password){
                const isEmail = await AuthModal.findOne({email:email});
                if(isEmail){
                          if(isEmail.email === email && await bcrypt.compare(password,isEmail.password)){
                            // Generating Token
                                 const token = jwt.sign({ userID : isEmail._id},"pleaseSubscribe",{
                                    expiresIn : "2d",
                                });

                                return res.status(200).json({
                                    message : "Login Successfully",
                                    token,
                                    name : isEmail.username,
                                });
                          }
                          else{
                             return res.status(400).json({message: "Wrong Credintial"})
                          }
                }
                else{
                     return res.status(400).json({message: "Email is Not Registered"})
                }
        }
        else{
             return res.status(400).json({message: "All Fields Are Required"});
        }
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
  }

}
export default AuthController;
