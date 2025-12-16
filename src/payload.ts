type RegionSales = {
  total: number;
  orders: number;
  avgOrder: number;
  sliceDate: string;
};

type SalesData = Record<string, RegionSales>;

export const salesData: SalesData = {
  moscow: {
    total: 150000,
    orders: 45,
    avgOrder: 3333,
    sliceDate: '2025-12-01',
  },
  spb: {
    total: 120000,
    orders: 32,
    avgOrder: 3750,
    sliceDate: '2025-11-28',
},
  ekb: {
    total: 80000,
    orders: 28,
    avgOrder: 2857,
    sliceDate: '2025-12-03',
  }
};
