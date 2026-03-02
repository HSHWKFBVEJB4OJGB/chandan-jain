import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  const existing = await Booking.findOne({
    slot: body.slot,
    date: body.date,
  });

  if (existing) {
    return Response.json(
      { message: "Slot already booked" },
      { status: 400 }
    );
  }

  await Booking.create(body);

  return Response.json({ message: "Booked successfully" });
}

export async function GET() {
  await connectDB();
  const bookings = await Booking.find();
  return Response.json(bookings);
}