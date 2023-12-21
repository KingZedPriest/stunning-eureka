import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
    const body = await request.json();
    const {
      name,
      email,
      subject,
      message,
    } = body;
    if (
      !email ||
      !name ||
      !subject ||
      !message
    ) {
      return new NextResponse("Missing Fields", { status: 400 });
    }
    const newContactForm = await prisma.contactForm.create({
      data: {
        email,
        name,
        subject,
        message
      },
    });

    return NextResponse.json(newContactForm)
  }
  