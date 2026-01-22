import mongoose, { Schema, Document } from 'mongoose';

export interface Product extends Document {
    name: string;
    category: string;
    price: number;
    imageUrl: string;
    description?: string;
    brand?: string;
    embedding: number[];
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        index: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    brand: {
        type: String,
        trim: true
    },
    embedding: {
        type: [Number],
        required: true
    }
    }, {
    timestamps: true
});

// Index for efficient vector search
ProductSchema.index({ category: 1, createdAt: -1 });

export default mongoose.model<Product>('Product', ProductSchema);