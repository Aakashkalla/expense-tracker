import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const userId = "temp-user";
  const month = "2026-01";

  const monthlyConfig = await prisma.monthlyConfig.findUnique({
    where: {
      userId_month: {
        userId,
        month,
      },
    },
  });

  if (!monthlyConfig) {
    redirect("/setup");
  }

  const expenses = await prisma.expense.findMany({
    where: {
      userId,
      month,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <DashboardClient
      expenses={expenses}
      monthlyConfig={monthlyConfig}
    />
  );
}
