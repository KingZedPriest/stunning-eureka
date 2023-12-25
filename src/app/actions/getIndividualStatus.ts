"use server"
import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export default async function getPackageWithStatusChanges(trackingNumber: string) {

  try {

    const packageWithStatusChanges = await prisma.package.findUnique({
      where: { 
        trackingNumber: trackingNumber 
      },
      include: { 
        statusChanges: true 
      },
    });

    if (packageWithStatusChanges) {
      const statusChangesArray = packageWithStatusChanges.statusChanges;

      if (statusChangesArray && statusChangesArray.length > 0) {

        return packageWithStatusChanges

      } else {
        return new NextResponse ('No Status Changes Found', { status: 404 })
      }
    } else {
      return new NextResponse ('No Tracking Number Found', { status: 404 })
    }

  } catch (error: any) {

    console.error(error);
    throw error;

  }
}
