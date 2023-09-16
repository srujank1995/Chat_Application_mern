const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userschema = mongoose.Schema(
{
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true , unique:true },
    password: { type: String, trim: true, required: true },
    pic: {
        type: String,
        trim:true,
        default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
},
  {
        timestamps: true
  },

);

userschema.methods.matchPassword = async function(reqpassword){
  return await bcrypt.compare(reqpassword, this.password);
}

userschema.pre('save', async function (next){
  if (!this.isModified){
    next()
  }

  const salt = await bcrypt.genSalt(15);
  this.password = await bcrypt.hash(this.password, salt)
})

const UserSchema = mongoose.model("UserSchema", userschema)
module.exports= UserSchema;
