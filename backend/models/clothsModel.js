const mongoose = require("mongoose");

const ClothsSchema = new mongoose.Schema ({
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        enum: ['XS', 'S', 'M', 'L', 'XL'],
        required: true,
    },
    category: { // Men, Women, Kids
        type: String,
        required: true,
    },
    condition: { // New, Like New, etc
        type: String,
        required: true,
    },
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donor",
        required: true,
      },
    }, { timestamps: true }
);

const ClothsModel = new mongoose.model("Cloth", ClothsSchema);

module.exports = { ClothsModel };