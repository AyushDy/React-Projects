const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;


const cartSchema = new mongoose.Schema(
    {
        userId: {
        type: ObjectId,
        ref: "User",
        required: true,
        },
        products: [
        {
            productId: {
            type: ObjectId,
            ref: "Product",
            required: true,
            },
            quantity: {
            type: Number,
            default: 1,
            },
        },
        ],
    },
    { timestamps: true }
    );


const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;