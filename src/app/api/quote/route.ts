import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
    const body = await request.json();
    const {
      fullName,
      email,
      phoneNumber,
      pickupLocation,
      deliveryLocation,
      chosenDateTime,
      importantDetails,
    } = body;
    if (
      !email ||
      !fullName ||
      !phoneNumber ||
      !pickupLocation ||
      !deliveryLocation ||
      !chosenDateTime ||
      !importantDetails
    ) {
      return new NextResponse("Missing Fields", { status: 400 });
    }
    const newQuote = await prisma.quote.create({
      data: {
        email,
        fullName,
        phoneNumber,
        pickupLocation,
        deliveryLocation,
        chosenDateTime,
        importantDetails
      },
    });

    return NextResponse.json(newQuote)
  }
  