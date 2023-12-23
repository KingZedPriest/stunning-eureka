import { prisma } from "@/lib/prismadb";

export default async function getPackageWithStatusChanges(trackingNumber: string) {

  try {

    const packageWithStatusChanges = await prisma.package.findMany({
      where: { 
        trackingNumber: trackingNumber 
      },
      include: { 
        statusChanges: true 
      },
    });

    return packageWithStatusChanges;

  } catch (error: any) {

    console.error(error);
    throw error;

  }
}
