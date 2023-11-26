import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 50,
  },
  surname: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 100,
  },
  expirationDate: {
    type: Date,
  },
});

export default mongoose.model("User", userSchema);
