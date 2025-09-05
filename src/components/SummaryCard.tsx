"use client";
import { useTransactions } from "../context/TransactionContext";

export default function SummaryCard() {
  const { transactions } = useTransactions();
  const totalIncome = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0);
  const remainingBudget = 6000 - totalExpense;

  return (
    <div className="p-4 border rounded shadow flex justify-around">
      <div>Income: ₹{totalIncome}</div>
      <div>Expense: ₹{totalExpense}</div>
      <div>Remaining: ₹{remainingBudget}</div>
    </div>
  );
}
