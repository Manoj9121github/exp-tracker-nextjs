"use client";
import { TransactionProvider } from "../context/TransactionContext";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import SummaryCard from "../components/SummaryCard";
import BudgetChart from "../components/BudgetChart";

export default function Home() {
  return (
    <TransactionProvider>
      <main className="max-w-xl mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">💰 Expense Tracker</h1>
        <SummaryCard />
        <TransactionForm />
        <TransactionList />
        <BudgetChart />
      </main>
    </TransactionProvider>
  );
}
