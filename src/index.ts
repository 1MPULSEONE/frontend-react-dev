import { salesData, SalesData } from "./payload";

type MappedSale = {
  region: string;
  total: number;
  orders: number;
  avgOrder: number;
  regionGrowth: string;
  sliceDate: string;
  status: "success" | "warning";
};

const salesMapper = (data: SalesData): MappedSale[] => {
  const entries = Object.entries(data);

  let minTotal = Infinity;
  let maxTotal = -Infinity;
  for (const [, value] of entries) {
    if (value.total < minTotal) minTotal = value.total;
    if (value.total > maxTotal) maxTotal = value.total;
  }
  const totalRange = maxTotal - minTotal;

  return entries.map(([key, value]) => {
    const growthPercent =
      totalRange > 0
        ? Math.round(((value.total - minTotal) / totalRange) * 100)
        : 0;

    return {
      region: `${key.charAt(0).toUpperCase()}${key.slice(1)}`,
      total: value.total,
      orders: value.orders,
      avgOrder: value.avgOrder,
      regionGrowth: `+${growthPercent}%`,
      sliceDate: new Date(value.sliceDate).toISOString(),
      status: value.orders >= 30 ? "success" : "warning",
    };
  });
};

console.log(salesMapper(salesData));
