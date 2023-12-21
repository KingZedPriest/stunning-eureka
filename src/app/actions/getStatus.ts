import { prisma } from "@/lib/prismadb";

export default async function getStatus(id: string) {
  try {
    const packageStatus = await prisma.packageStatusChange.findMany({
      where: {
        packageId: id,
      },
      orderBy: {
        timestamp: "desc"
    }
    });

    return packageStatus;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
