import { prisma } from "@/lib/prismadb";

export default async function getAllQuote() {
  try {
    const allQuote = await prisma.quote.findMany({
      orderBy: {
        createdAt: "desc"
    }
    });

    return allQuote;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
