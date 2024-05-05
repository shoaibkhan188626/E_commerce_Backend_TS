import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your Name']
        },
        photo: {
            type: String,
            required: [true, 'Please add photo']
        },
        price: {
            type: Number,
            required: [true, 'Please enter the price']
        },
        stock: {
            type: Number,
            required: [true, 'Please Enter the Stock']
        },
        category: {
            type: String,
            required: [true, 'Please enter the category'],
            trim: true
        }
    },
    {
        timestamps: true
    }
);

export const Product = mongoose.model('Product', schema)