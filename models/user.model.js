import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({

    fullname:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },
    
    password:{
        type:String,
        required:true,
    },

    role:{
        type:String,
        enum: ["Admin", "Examiner", "Student"],
    },

    avatar:{
        type:String,
        default:null
    },

    created_at:{
        type:Date,
        default:Date.now()
    }
    
})


// userSchema.methods.isPasswordCorrect = async function (password) {
//     return await bcrypt.compare(password, this.password);
//   };

export default mongoose.model("user", UserSchema)