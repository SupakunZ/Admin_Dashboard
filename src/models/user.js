import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true
    },
    lastName: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    }
  }, {timestamps:true})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;