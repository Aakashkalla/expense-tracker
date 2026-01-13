"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addExpense(formData: FormData) {
  const amount = Number(formData.get("amount"));
  const description = String(formData.get("description"));

  await prisma.expense.create({
    data: {
      amount,
      description,
      userId: "temp-user",
      month: "2026-01",
    },
  });

  revalidatePath("/dashboard");
}
