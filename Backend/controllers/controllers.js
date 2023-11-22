import User from "../Models/users.js";

export async function addNewUser(req, res) {
  const { name, surname, email, expirationDate } = req.body;
  if (!name || !surname || !email) {
    return res
      .status(400)
      .json({ message: "name, surname and email are required" });
  }
  try {
    const user = new User({
      name,
      surname,
      email,
      expirationDate,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function getAllUsers(req, res) {
  try {
    const users = await User.find({}, { __v: 0 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function getUsersById(req, res) {
  const { id } = req.params;
  try {
    const users = await User.findById(id);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    const users = await User.findById(id);
    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(204).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function updateUser(req, res) {
  const { id } = req.params;
  const { name, surname, email, expirationDate } = req.body;
  if (!name || !surname || !email) {
    return res
      .status(400)
      .json({ message: "name, surname and email are required" });
  }
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = name;
    user.surname = surname;
    user.email = email;
    user.expirationDate = expirationDate;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
