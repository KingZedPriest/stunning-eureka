import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    trackingNumber,
    originPort,
    destinationPort,
    transportationMode,
    pieces,
    length,
    weight,
    width,
    height,
    deliveryRequiredDate,
    statusChanges,
    estimatedDeliveryDate,
  } = body;

  const newPackage = await prisma.package.create({
    data: {
      trackingNumber,
      originPort,
      destinationPort,
      transportationMode,
      pieces,
      length,
      weight,
      width,
      height,
      deliveryRequiredDate,
      statusChanges,
      estimatedDeliveryDate,
    },
  });

  return NextResponse.json(newPackage)
  
}
