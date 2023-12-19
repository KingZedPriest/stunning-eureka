import { prisma } from "@/lib/prismadb";

export default async function getPackages() {
    try {
        const packages = await prisma.package.findMany({
            orderBy: {
                dateCreated: "desc"
            }
        })
        return packages
        
    }catch(error: any){
        console.error(error)
        throw error
    }
}