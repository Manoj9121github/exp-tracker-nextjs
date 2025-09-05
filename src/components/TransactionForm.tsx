"use client";
import { useState } from "react";
import { useTransactions, TransactionType } from "../context/TransactionContext";

const BUDGET_LIMIT = 6000;

export default function TransactionForm() {
  const { transactions, addTransaction } = useTransactions();
  const [type, setType] = useState<"income" | "expense">("income");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);

  const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "expense" && totalExpenses + amount > BUDGET_LIMIT) {
      alert(`Budget limit of ₹${BUDGET_LIMIT} exceeded!`);
      return;
    }
    const newTransaction: TransactionType = {
      id: Date.now(),
      type,
      description,
      amount,
    };
    addTransaction(newTransaction);
    setDescription("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded shadow">
      <select value={type} onChange={e => setType(e.target.value as any)} className="border p-1 rounded">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="border p-1 rounded w-full"
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        className="border p-1 rounded w-full"
        required
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Add Transaction</button>
    </form>
  );
}
