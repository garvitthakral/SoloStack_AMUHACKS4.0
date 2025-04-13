const { ClothsModel } = require("../models/clothsModel");

module.exports.createCloth = async (req, res) => {
  try {
    if (req.user.role !== "donor") {
      console.error("while craeting the cloth listing:", err);
      res.status(401).json({ success: false, message: "authorized" });
    }
    const { image, description, size, category, condition } = req.body;

    if (!image || !description || !size || !category || !condition) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const newCloth = await ClothsModel.create({
      image,
      description,
      size,
      category,
      condition,
      donor: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Cloth uploaded successfully.",
    });
  } catch (err) {
    console.error("while craeting the cloth listing:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports.getAllCloths = async (req, res) => {
  try {
    const allCloths = await ClothsModel.find().populate("donor", "name email");
    if (allCloths) {
      res.status(200).json({
        success: true,
        count: allCloths.length,
        allCloths,
      });
    }
  } catch (err) {
    console.error("while fetching all cloths details", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports.DeleteCloth = async (req, res) => {
  try {
    const { id } = req.params;

    const cloth = await ClothsModel.findById(id);
    if (!cloth) {
      return res
        .status(404)
        .json({ success: false, message: "Cloth not found" });
    }

    if (cloth.donor.toString() !== req.user._id.toString()) {
      res.status(403).json({ success: false, message: "forbidden" });
    }

    const deleteCloth = await ClothsModel.findByIdAndDelete(id);
    res.json({ success: true, message: `cloth deldted: ${deleteCloth}` });
  } catch (err) {
    console.error("while fetching all cloths details", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports.getACloth = async (req, res) => {
  try {
    const { id } = req.params;
    const aCloth = await ClothsModel.findById(id).populate(
      "donor",
      "name email"
    );
    if (!aCloth) {
      res
        .status(404)
        .json({ success: false, message: "Server error: cloth didnt found" });
    }

    res.json({ success: true, message: "here is your cloth", aCloth });
  } catch (err) {
    console.error("while fetching cloth details", err);
    res
      .status(404)
      .json({ success: false, message: "Server error: cloth didnt found" });
  }
};
