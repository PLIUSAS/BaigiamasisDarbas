import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  surname: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  expirationDate: {
    type: Date,
  },
});

export default mongoose.model("User", userSchema);
