import mongoose, { Schema, Document } from 'mongoose';

export interface IDestination extends Document {
  name: string;
  description: string;
  location: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

const DestinationSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Destination || mongoose.model<IDestination>('Destination', DestinationSchema);
