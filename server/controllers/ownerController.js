export const changeRoleToOwner = async (req, res) => {
  // API to change role of user
  try {
    const { _id } = req.user;
    await user.findByIdAndUpdate(_id, { role: "owner" });
    res.json({ success: true, message: "Now you can list cars" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API ton list car

export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    let car = JSON.parse(req.body.carData);
    const imageFile = req.file;
  } catch (error) {
    console.error("Error:", error.message);
    res.json({ success: false, message: error.message });
  }
};
