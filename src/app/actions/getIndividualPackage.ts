import { prisma } from "@/lib/prismadb";

export default async function getIndividualPackage(id: string) {
  try {
    const packageItem = await prisma.package.findMany({
      where: {
        id: id,
      },
    });

    return packageItem;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
