import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  picture: { type: String } // Store the URL of the user's profile picture
});

const User = mongoose.model('User', userSchema);

export default User;
