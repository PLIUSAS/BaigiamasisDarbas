import User from "../Models/users.js";

export async function addNewUser(req, res) {
  const { name, surname, email, expirationDate } = req.body;
  try {
    if (!name || !surname || !email) {
      return res.json({
        success: false,
        message: "Please provide name, surname and email",
      });
    }
    if (name.length < 6) {
      return res.json({
        success: false,
        message: "Name must be at least 6 characters",
      });
    }
    if (name.length > 50) {
      return res.json({
        success: false,
        message: "Name must be less than 50 characters",
      });
    }
    if (surname.length < 6) {
      return res.json({
        success: false,
        message: "Surname must be at least 6 characters",
      });
    }
    if (surname.length > 50) {
      return res.json({
        success: false,
        message: "Surname must be less than 50 characters",
      });
    }
    if (email.length < 6) {
      return res.json({
        success: false,
        message: "Email must be less than 6 characters",
      });
    }
    if (email.length > 100) {
      return res.json({
        success: false,
        message: "Email must be less than 100 characters",
      });
    }
    if (!email.includes("@")) {
      return res.json({
        success: false,
        message: "Please provide valid email with @",
      });
    }
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
  try {
    if (!name || !surname || !email) {
      return res.json({
        success: false,
        message: "Please provide name, surname and email",
      });
    }
    if (name.length < 6) {
      return res.json({
        success: false,
        message: "Name must be at least 6 characters",
      });
    }
    if (name.length > 50) {
      return res.json({
        success: false,
        message: "Name must be less than 50 characters",
      });
    }
    if (surname.length < 6) {
      return res.json({
        success: false,
        message: "Surname must be at least 6 characters",
      });
    }
    if (surname.length > 50) {
      return res.json({
        success: false,
        message: "Surname must be less than 50 characters",
      });
    }
    if (email.length < 6) {
      return res.json({
        success: false,
        message: "Email must be less than 6 characters",
      });
    }
    if (email.length > 100) {
      return res.json({
        success: false,
        message: "Email must be less than 100 characters",
      });
    }
    if (!email.includes("@")) {
      return res.json({
        success: false,
        message: "Please provide valid email with @",
      });
    }
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
