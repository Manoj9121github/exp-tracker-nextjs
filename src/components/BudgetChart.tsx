"use client";
import { useTransactions } from "../context/TransactionContext";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BudgetChart() {
  const { transactions } = useTransactions();
  const totalIncome = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0);
  const remaining = 6000 - totalExpense;

  const data = {
    labels: ["Income", "Expense", "Remaining"],
    datasets: [{
      label: "Budget",
      data: [totalIncome, totalExpense, remaining],
      backgroundColor: ["#22c55e", "#ef4444", "#3b82f6"],
    }]
  };

  return <div className="p-4 border rounded shadow"><Pie data={data} /></div>;
}
