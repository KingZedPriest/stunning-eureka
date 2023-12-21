import { prisma } from "@/lib/prismadb";

export default async function getAllStatus() {
  try {
    const allPackageStatus = await prisma.packageStatusChange.findMany({
      orderBy: {
        timestamp: "desc"
    }
    });

    return allPackageStatus;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
