import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  slot: { type: String, required: true },
  date: { type: String, required: true },
});

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);