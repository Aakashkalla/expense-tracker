import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const userId = session.user.id;
  const month = "2026-01"; // dynamic later

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
