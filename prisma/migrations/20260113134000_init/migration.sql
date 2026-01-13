-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyConfig" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "limit" INTEGER NOT NULL,
    "savingReason" TEXT NOT NULL,

    CONSTRAINT "MonthlyConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expense" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MonthlyConfig_userId_month_key" ON "MonthlyConfig"("userId", "month");

-- AddForeignKey
ALTER TABLE "MonthlyConfig" ADD CONSTRAINT "MonthlyConfig_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
