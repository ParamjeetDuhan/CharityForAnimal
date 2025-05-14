import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    username:{
        type : String
    },
     email:{
        type : String
    },
     password:{
        type : String
    },
});

const AuthModel = mongoose.model("Users",AuthSchema);

export default AuthModel;