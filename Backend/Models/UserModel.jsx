const mongoose = require("mongoose");

const userschema = mongoose.Schema(
{
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    pic: {
        type: String,
        trim: true,
        default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
},
  {
        timestamps: true
  },

);

const UserSchema = mongoose.model("UserSchema", userschema)
export default UserSchema;
