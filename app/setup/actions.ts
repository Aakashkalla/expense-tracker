"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getCurrentMonth } from "@/lib/month";
import { authOptions } from "../api/auth/[...nextauth]/route";

export async function saveMonthlyConfig(formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
  }

  const userId = session.user.id;
  const month = getCurrentMonth();

  const budget = Number(formData.get("budget"));
  const limit = Number(formData.get("limit"));
  const savingReason = String(formData.get("savingReason"));

  await prisma.monthlyConfig.upsert({
    where: {
      userId_month: {
        userId,
        month,
      },
    },
    update: {
      budget,
      limit,
      savingReason,
    },
    create: {
      userId,
      month,
      budget,
      limit,
      savingReason,
    },
  });

  redirect("/dashboard");
}
