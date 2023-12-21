import { prisma } from "@/lib/prismadb";

export default async function getAllContactForms() {
  try {
    const allContactForm = await prisma.contactForm.findMany({
      orderBy: {
        createdAt: "desc"
    }
    });

    return allContactForm;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
