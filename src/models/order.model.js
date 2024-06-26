import mongoose from "mongoose";
import { ObjectId } from "mongoose";

const productCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
})

const ProductCart = mongoose.model("ProductCart", productCartSchema)

const orderSchema = new mongoose.Schema({
    products: [productCartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    updated: Date,
    status: {
        type: String,
        default: "Recieved",
        enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Recieved"]
    },
    user: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Order = mongoose.model("Order", orderSchema)

export {productCartSchema, Order}
