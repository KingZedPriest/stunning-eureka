import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 
  const { packageID } = req.body;

  try {
    const statusData = await prisma.package.findUnique({
      where: { trackingNumber: packageID },
      include: { statusChanges: true },
    });

    if (statusData) {
      const statusChangesArray = statusData.statusChanges;

      if (statusChangesArray && statusChangesArray.length > 0) {
        for (const statusChange of statusChangesArray) {
          const { id, timestamp, status } = statusChange;
          // Do something with the statusChange data if needed
        }
      } else {
        return res.status(404).json({ message: 'No Status Changes Found' });
      }
    } else {
      return res.status(404).json({ message: 'No Tracking Number Found' });
    }

    res.status(200).json(statusData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
