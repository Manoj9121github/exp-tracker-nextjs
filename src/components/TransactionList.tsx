"use client";
import { useTransactions } from "../context/TransactionContext";

export default function TransactionList() {
  const { transactions } = useTransactions();
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-bold mb-2">Transactions</h2>
      <ul>
        {transactions.map(t => (
          <li key={t.id} className="flex justify-between border-b py-1">
            <span>{t.description} ({t.type})</span>
            <span>₹{t.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
