import prisma from "@/lib/prisma";
import DashboardClient from "@/app/dashboard/DashboardClient";

export default async function DashboardPage() {
  const expenses = await prisma.expense.findMany({
    where: {
      userId: "temp-user", // auth later
      month: "2026-01",
    },
    orderBy: { createdAt: "desc" },
  });

  const monthlyConfig = await prisma.monthlyConfig.findUnique({
  where: {
    userId_month: {
      userId: "temp-user",
      month: "2026-01",
    },
  },
});

  return <DashboardClient expenses={expenses} monthlyConfig={monthlyConfig} />;
}
