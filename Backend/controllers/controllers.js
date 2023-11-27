import User from "../Models/users.js";

export async function addNewUser(req, res) {
  const { name, surname, email, expirationDate } = req.body;
  try {
    if (!name || !surname || !email || !expirationDate) {
      return res.json({
        success: false,
        message: "Prašome užpildyti Varda/Pavarde/El Pasta ir Data",
      });
    }
    if (name.length < 6) {
      return res.json({
        success: false,
        message: "Vardas turi būti, bent 6 raidžių ilgumo",
      });
    }
    if (name.length > 32) {
      return res.json({
        success: false,
        message: "Vardas turi būti neilgesnis nei 32 raidžių ilgumo",
      });
    }
    if (surname.length < 6) {
      return res.json({
        success: false,
        message: "Pavardė turi būti, bent 6 raidžių ilgumo",
      });
    }
    if (surname.length > 32) {
      return res.json({
        success: false,
        message: "Pavardė turi būti neilgesnė nei 32 raidžių ilgumo",
      });
    }
    if (email.length < 6) {
      return res.json({
        success: false,
        message: "El.Pastas turi būti, bent 6 raidžių ilgumo",
      });
    }
    if (email.length > 50) {
      return res.json({
        success: false,
        message: "El.Pastas turi būti neilgesnis nei 32 raidžių ilgumo",
      });
    }
    if (!email.includes("@")) {
      return res.json({
        success: false,
        message: "El.Pastas turi turėti, bent '@' simbolį",
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
      return res.status(404).json({ message: "Klijantas nerastas" });
    }
    await User.findByIdAndDelete(id);
    res.status(204).json({ message: "Klijantas ištrintas" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function updateUser(req, res) {
  const { id } = req.params;
  const { name, surname, email, expirationDate } = req.body;
  try {
    if (!name || !surname || !email || !expirationDate) {
      return res.json({
        success: false,
        message: "Prašome užpildyti Varda/Pavarde/El Pasta ir Data",
      });
    }
    if (name.length < 6) {
      return res.json({
        success: false,
        message: "Vardas turi būti, bent 6 raidžių ilgumo",
      });
    }
    if (name.length > 32) {
      return res.json({
        success: false,
        message: "Vardas turi būti neilgesnis nei 32 raidžių ilgumo",
      });
    }
    if (surname.length < 6) {
      return res.json({
        success: false,
        message: "Pavardė turi būti, bent 6 raidžių ilgumo",
      });
    }
    if (surname.length > 32) {
      return res.json({
        success: false,
        message: "Pavardė turi būti neilgesnė nei 32 raidžių ilgumo",
      });
    }
    if (email.length < 6) {
      return res.json({
        success: false,
        message: "El.Pastas turi būti, bent 6 raidžių ilgumo",
      });
    }
    if (email.length > 50) {
      return res.json({
        success: false,
        message: "El.Pastas turi būti neilgesnis nei 32 raidžių ilgumo",
      });
    }
    if (!email.includes("@")) {
      return res.json({
        success: false,
        message: "El.Pastas turi turėti, bent '@' simbolį",
      });
    }
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Klijantas nerastas" });
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
