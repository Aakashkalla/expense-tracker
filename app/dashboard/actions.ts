"use server";

import {prisma} from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getCurrentMonth } from "@/lib/month";
import { authOptions } from "../api/auth/[...nextauth]/route";

export async function addExpense(formData: FormData) {
 const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
  }

  const userId = session.user.id;
  const month = getCurrentMonth();

  const amount = Number(formData.get("amount"));
  const description = String(formData.get("description"));

  await prisma.expense.create({
    data: {
      amount,
      description,
      userId,
      month,
    },
  });

  revalidatePath("/dashboard");
}
