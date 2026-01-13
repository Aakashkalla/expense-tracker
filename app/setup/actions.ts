"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function saveMonthlyConfig(formData: FormData) {
  const budget = Number(formData.get("budget"));
  const limit = Number(formData.get("limit"));
  const savingReason = String(formData.get("savingReason"));

  const userId = "temp-user";
  const month = "2026-01";

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
