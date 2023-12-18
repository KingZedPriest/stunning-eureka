import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){
    const body = await request.json();

    const {
        status,
        packageId
    } = body

    const newStatus = await prisma.packageStatusChange.create({
        data: {
            status,
            package: {
                connect: {
                    id:packageId
                }
            }
        }
    });

    return NextResponse.json(newStatus)
    
}