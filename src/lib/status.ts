export const formatStatus = (status: string): string => {
    const statusMapping: Record<string, string> = {
      PickedUp: 'Picked Up',
      PackageReceived: 'Package is Received',
      InTransitRoad: 'In Transit - Road',
      InFlight: 'In Flight',
      InShip: 'In Ship',
      InRail: 'In Rail',
      Arrived: 'Arrived',
      OutForDelivery: 'Out for Delivery',
      Delivered: 'Delivered',
    };
  
    return statusMapping[status] || status;
  };
  
  