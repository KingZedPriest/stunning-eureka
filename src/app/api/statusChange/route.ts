import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){
    const body = await request.json();

    const {
        statusChanges,
        packageID
    } = body

    if(!statusChanges || !packageID){
        
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const newStatus = await prisma.packageStatusChange.create({
        data: {
            status: statusChanges,
            package: {
                connect: {
                    id:packageID
                }
            }
        }
    });

    return NextResponse.json(newStatus)
    
}