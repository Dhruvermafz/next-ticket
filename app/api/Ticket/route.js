import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tickets = await Ticket.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { message: "Error fetching tickets", error },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    const createdTicket = await Ticket.create(ticketData);

    return NextResponse.json(
      { ticket: createdTicket, message: "Ticket created" },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { message: "Error creating ticket", error },
      { status: 500 }
    );
  }
}
